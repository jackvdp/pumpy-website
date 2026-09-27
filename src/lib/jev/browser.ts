import puppeteer, { type Browser, type Page } from "puppeteer";
import type { Decision, Observation, PageElement } from "./types";

export const VIEWPORT = { width: 1280, height: 800 };
const MAX_ELEMENTS = 150;

/**
 * Connects to a remote browser when BROWSER_WS_ENDPOINT is set (needed on
 * serverless hosts such as Vercel, which ship no Chromium), otherwise launches
 * a local headless Chromium.
 */
export async function openBrowser(): Promise<Browser> {
  const endpoint = process.env.BROWSER_WS_ENDPOINT;
  if (endpoint) return puppeteer.connect({ browserWSEndpoint: endpoint });
  return puppeteer.launch({
    headless: true,
    executablePath: process.env.CHROMIUM_PATH || undefined,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
}

export async function openPage(browser: Browser, url: string): Promise<Page> {
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });
  await settle(page);
  return page;
}

export async function settle(page: Page) {
  await page
    .waitForNetworkIdle({ idleTime: 500, timeout: 5_000 })
    .catch(() => undefined);
}

export async function screenshot(page: Page): Promise<string> {
  const data = await page.screenshot({ type: "jpeg", quality: 60, encoding: "base64" });
  return `data:image/jpeg;base64,${data}`;
}

/**
 * Reads visible interactive controls, the page equivalent of third-hand's
 * accessibility tree walk. Each element is tagged with data-jev-id so a
 * decision can be mapped back to it.
 */
export async function observe(page: Page): Promise<Observation> {
  const { elements, text } = await page.evaluate((max: number) => {
    const selector = [
      "a[href]",
      "button",
      "input:not([type=hidden])",
      "textarea",
      "select",
      "summary",
      "[contenteditable=''], [contenteditable=true]",
      "[role=button], [role=link], [role=tab], [role=menuitem], [role=option], [role=checkbox], [role=radio], [role=switch], [role=combobox], [role=searchbox], [role=textbox]",
      "[onclick]",
    ].join(",");

    document.querySelectorAll("[data-jev-id]").forEach((el) => el.removeAttribute("data-jev-id"));

    const visible = (el: Element) => {
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return false;
      if (rect.bottom < 0 || rect.top > window.innerHeight * 1.5) return false;
      if (rect.right < 0 || rect.left > window.innerWidth) return false;
      const style = getComputedStyle(el);
      return style.visibility !== "hidden" && style.display !== "none" && Number(style.opacity) > 0.05;
    };

    const squash = (value: string | null | undefined) =>
      (value ?? "").replace(/\s+/g, " ").trim().slice(0, 120);

    const labelFor = (el: HTMLElement) => {
      const labelled = el.getAttribute("aria-labelledby");
      const byId = labelled
        ? labelled.split(" ").map((id) => document.getElementById(id)?.innerText).join(" ")
        : "";
      const forLabel = el.id ? document.querySelector<HTMLElement>(`label[for="${CSS.escape(el.id)}"]`)?.innerText : "";
      return squash(
        el.getAttribute("aria-label") ||
          byId ||
          forLabel ||
          el.innerText ||
          el.getAttribute("placeholder") ||
          el.getAttribute("title") ||
          el.querySelector("img")?.getAttribute("alt") ||
          el.getAttribute("name") ||
          (el instanceof HTMLInputElement && ["submit", "button"].includes(el.type) ? el.value : ""),
      );
    };

    const found: Array<{
      id: string;
      role: string;
      label: string;
      value?: string;
      focused: boolean;
      editable: boolean;
    }> = [];

    for (const node of document.querySelectorAll<HTMLElement>(selector)) {
      if (found.length >= max) break;
      if (!visible(node)) continue;
      if (node.hasAttribute("disabled") || node.getAttribute("aria-disabled") === "true") continue;

      const tag = node.tagName.toLowerCase();
      const type = node instanceof HTMLInputElement ? node.type : "";
      const editable =
        tag === "textarea" ||
        node.isContentEditable ||
        ["textbox", "searchbox", "combobox"].includes(node.getAttribute("role") ?? "") ||
        (tag === "input" && !["checkbox", "radio", "submit", "button", "reset", "file", "image", "range", "color"].includes(type));
      const role = node.getAttribute("role") || (tag === "input" ? `input:${type || "text"}` : tag === "a" ? "link" : tag);
      const label = labelFor(node);
      if (!label && !editable) continue;

      const id = String(found.length + 1);
      node.setAttribute("data-jev-id", id);
      const value =
        node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement || node instanceof HTMLSelectElement
          ? squash(node.value)
          : undefined;
      found.push({
        id,
        role,
        label: label || "(unlabelled field)",
        value: value && value !== label ? value : undefined,
        focused: document.activeElement === node,
        editable,
      });
    }

    return {
      elements: found,
      text: (document.body?.innerText ?? "").replace(/\s+/g, " ").trim().slice(0, 1500),
    };
  }, MAX_ELEMENTS);

  return { url: page.url(), title: await page.title(), elements: elements as PageElement[], text };
}

/** Carries out a decision and returns a short, human-readable result. */
export async function execute(page: Page, decision: Decision, observation: Observation): Promise<string> {
  const target = decision.target
    ? observation.elements.find((el) => el.id === decision.target)
    : undefined;
  const handle = decision.target ? await page.$(`[data-jev-id="${decision.target}"]`) : null;

  switch (decision.operation) {
    case "CLICK": {
      if (!handle || !target) return "target is no longer on the page";
      await handle.scrollIntoView().catch(() => undefined);
      await handle.click().catch(() => handle.evaluate((el) => (el as HTMLElement).click()));
      await settle(page);
      return `clicked "${target.label}"`;
    }
    case "TYPE_TEXT": {
      if (!handle || !target || !decision.text) return "no field or text to enter";
      await handle.scrollIntoView().catch(() => undefined);
      await handle.click({ count: 3 }).catch(() => handle.focus());
      await page.keyboard.down(process.platform === "darwin" ? "Meta" : "Control");
      await page.keyboard.press("KeyA");
      await page.keyboard.up(process.platform === "darwin" ? "Meta" : "Control");
      await page.keyboard.press("Backspace");
      await page.keyboard.type(decision.text, { delay: 15 });
      return `typed "${decision.text}" into "${target.label}"`;
    }
    case "NAVIGATE": {
      if (!decision.text) return "no URL to open";
      await page.goto(decision.text, { waitUntil: "domcontentloaded", timeout: 30_000 });
      await settle(page);
      return `opened ${decision.text}`;
    }
    case "SCROLL_UP":
    case "SCROLL_DOWN": {
      const dy = decision.operation === "SCROLL_UP" ? -0.8 : 0.8;
      await page.evaluate((f: number) => window.scrollBy({ top: window.innerHeight * f }), dy);
      await new Promise((r) => setTimeout(r, 400));
      return decision.operation === "SCROLL_UP" ? "scrolled up" : "scrolled down";
    }
    case "PRESS_RETURN":
      await page.keyboard.press("Enter");
      await settle(page);
      return "pressed Return";
    case "PRESS_ESCAPE":
      await page.keyboard.press("Escape");
      return "pressed Escape";
    case "GO_BACK":
      await page.goBack({ waitUntil: "domcontentloaded" }).catch(() => undefined);
      await settle(page);
      return "went back";
    case "WAIT":
      await new Promise((r) => setTimeout(r, 1_500));
      return "waited";
    default:
      return decision.operation.toLowerCase();
  }
}
