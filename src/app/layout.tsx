import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { MusicPlayer } from "@/components/site/music-player";
import { ScrollIndicator } from "@/components/site/scroll-indicator";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanderpump Tech | Websites, Apps & AI",
  description:
    "Bespoke websites, mobile apps and AI solutions. An independent digital partner delivering fast, personal service at every stage.",
  openGraph: {
    title: "Vanderpump Tech | Websites, Apps & AI",
    description:
      "Bespoke websites, mobile apps and AI solutions, designed and built end-to-end.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip">
        {children}
        <MusicPlayer />
        <ScrollIndicator />
      </body>
    </html>
  );
}
