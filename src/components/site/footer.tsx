import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://x.com/JackVanderpump", label: "Tw." },
  {
    href: "https://www.linkedin.com/in/jack-vanderpump-3421a3105/",
    label: "Li.",
  },
  { href: "https://www.github.com/jackvdp", label: "Gi." },
];

export function Footer() {
  return (
    <footer className="bg-baby texture-lines-baby">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="inline-block">
              <Image
                src="/images/logo.webp"
                alt="Vanderpump Technology"
                width={421}
                height={100}
                className="h-8 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs leading-relaxed text-ink/70">
              Websites, apps &amp; AI — designed and built as your dedicated
              digital partner.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink/60">
              Quick links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ink/80 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink/60">
              Get in touch
            </p>
            <a
              href="mailto:jack@vanderpump.tech"
              className="font-semibold text-ink underline decoration-flame decoration-2 underline-offset-4"
            >
              jack@vanderpump.tech
            </a>
            <div className="mt-6 flex gap-5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-ink/70 transition-colors hover:text-flame"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-ink/15" />

        <p className="text-sm text-ink/60">
          © {new Date().getFullYear()} Vanderpump Tech
        </p>
      </div>
    </footer>
  );
}
