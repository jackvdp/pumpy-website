import "./css/icon.css"
import "./css/vendors.css"
import "./css/style.css"
import "./css/responsive.css"
import "./css/digital-agency.css"
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer"
import { MusicPlayerProvider } from "@/components/MusicPlayer/MusicPlayerProvider"
import CustomCursor from "@/components/CustomCursor"
import ScrollIndicator from "@/components/ScrollIndicator"
import Script from "next/script"
import Head from "next/head"

export const metadata = {
  title: "Vanderpump Tech | Web & App Development",
  description: "Bespoke Web & App Development Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html className="no-js" lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap" as="style" />
      </Head>
      <body data-mobile-nav-style="full-screen-menu" data-mobile-nav-bg-color="#2d2c2b" className="custom-cursor">
        <MusicPlayerProvider>
          <CustomCursor />
          {children}
          <ScrollIndicator />
          <MusicPlayer />
        </MusicPlayerProvider>
        <Script src="/js/jquery.js" />
        <Script src="/js/vendors.js" />
        <Script src="/js/main.js" />
      </body>
    </html>
  );
}
