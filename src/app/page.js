"use client"

import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import loadScript from "@/utils/loadScript";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import About from "@/components/About";
import HowItWorks from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Parallax from "@/components/Parallax";
import Facts from "@/components/Facts";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  const scriptsLoadedRef = useRef(false);

  useEffect(() => {
    const loadScripts = async () => {
      try {
        await loadScript('/js/jquery.js');
        await loadScript('/js/vendors.js');
        await loadScript('/js/main.js');
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    if (!scriptsLoadedRef.current) {
      scriptsLoadedRef.current = true;
      loadScripts();
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        ['jquery.js', 'vendors.min.js', 'main.js'].forEach(src => {
          const script = document.querySelector(`script[src="/js/${src}"]`);
          if (script) {
            document.body.removeChild(script);
          }
        });
        scriptsLoadedRef.current = false;
      }
    };
  }, []);

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