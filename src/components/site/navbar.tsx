"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-ink/5 shadow-[0_1px_0_rgba(45,44,43,0.04)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link href="#top" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.webp"
            alt="Vanderpump Technology"
            width={421}
            height={100}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-flame transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button
            render={<a href="mailto:jack@vanderpump.tech" />}
            nativeButton={false}
            size="sm"
            className="rounded-full px-5"
          >
            Start a project
          </Button>
        </div>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-ink/5 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-base font-medium text-ink/80 hover:bg-baby/40 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <Button
                render={<a href="mailto:jack@vanderpump.tech" />}
                nativeButton={false}
                className="mt-2 rounded-full"
              >
                Start a project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
