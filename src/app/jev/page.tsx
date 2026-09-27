import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JevConsole } from "@/components/jev/jev-console";

export const metadata: Metadata = {
  title: "Jev Computer Use | Vanderpump Tech",
  description: "Tell Jev what to do and watch it drive a browser.",
  robots: { index: false, follow: false },
};

export default function JevPage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 flex flex-col gap-3">
        <Link href="/" className="w-fit">
          <Image src="/images/logo.webp" alt="Vanderpump Technology" width={421} height={100} className="h-6 w-auto" />
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">Jev computer use</h1>
        <p className="max-w-2xl text-ink/70">
          Describe a task and Jev, TypeSafe&apos;s decision model, drives a browser one step at a time: it reads the
          page&apos;s controls, picks what to click or type, and checks whether the task is done. Text it types must
          come from your request, so quote exact search terms.
        </p>
      </header>
      <JevConsole />
    </main>
  );
}
