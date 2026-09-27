/**
 * Jev chooses between options rather than writing free text, so anything it
 * types must come from the user's own request. These helpers pull out the
 * phrases and URLs a request could plausibly want entered.
 */

const ENTRY_VERBS =
  /\b(?:search(?:\s+for)?|look\s+up|find|type|enter|write|fill\s+in|query|google)\s+(.+)/gi;
const STOP = /\s+(?:on|in|at|into|then|and|using|via|from)\s+|[.,;!?]/i;

function clean(value: string) {
  return value.trim().replace(/^["'“‘]|["'”’]$/g, "").trim();
}

export function textCandidates(goal: string): string[] {
  const found: string[] = [];

  for (const match of goal.matchAll(/["“]([^"”]{1,200})["”]|'([^']{1,200})'|‘([^’]{1,200})’/g)) {
    found.push(match[1] ?? match[2] ?? match[3]);
  }

  for (const match of goal.matchAll(ENTRY_VERBS)) {
    // Quoted phrases were already captured above.
    if (/^["'“‘]/.test(match[1].trim())) continue;
    const rest = clean(match[1]);
    found.push(rest.split(STOP)[0], rest);
  }

  const unique = new Map<string, string>();
  for (const candidate of found.map(clean)) {
    if (candidate.length > 0 && candidate.length <= 200 && !unique.has(candidate.toLowerCase())) {
      unique.set(candidate.toLowerCase(), candidate);
    }
  }
  return [...unique.values()].slice(0, 12);
}

export function urlCandidates(goal: string): string[] {
  const urls = new Set<string>();
  for (const match of goal.matchAll(
    /\b((?:https?:\/\/)?(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s"'<>]*)?)/gi,
  )) {
    const raw = match[1].replace(/[.,;!?)]+$/, "");
    if (/^\d+(\.\d+)+$/.test(raw)) continue;
    urls.add(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
  }
  return [...urls].slice(0, 8);
}
