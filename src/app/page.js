"use client"

import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import loadScript from "@/utils/loadScript";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import About from "@/components/About";
import HowItWorks from "@/components/Process";
import ScrollIndicator from "@/components/ScrollIndicator";
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
        await loadScript('/js/vendors.min.js');
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
    <div data-mobile-nav-style="full-screen-menu" data-mobile-nav-bg-color="#2d2c2b" className="custom-cursor">
      <div className="cursor-page-inner">
        <div className="circle-cursor circle-cursor-inner"></div>
        <div className="circle-cursor circle-cursor-outer"></div>
      </div>
      <Navbar />
      <Hero />
      <Logos />
      <About />
      <HowItWorks />
      <CaseStudies />
      <Facts />
      <Parallax />
      <Marquee />
      <Footer />
      <ScrollIndicator />
    </div>
  );
}
