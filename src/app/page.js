"use client"

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import About from "@/components/About";
import HowItWorks from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Parallax from "@/components/Parallax";
import Facts from "@/components/Facts";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer"
import Script from "next/script"

export default function Home() {

  return (
    <>
      <MainWrapper>
        <Navbar />
        <Hero />
        <Logos />
        <About />
        <HowItWorks />
        <CaseStudies />
        <Facts />
        <Parallax />
        <Marquee />
      </MainWrapper>
      <Footer />
      <Script src="/js/jquery.js" />
      <Script src="/js/vendors.js" />
      <Script src="/js/main.js" />
    </>
  );
}


function MainWrapper({ children }) {
  return (
    <main style={{
      position: 'relative',
      zIndex: 1,
      minHeight: '100vh',
    }}>
      {children}
    </main>
  );
}