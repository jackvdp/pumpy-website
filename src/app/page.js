"use client"

import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Logos from "@/components/Logos";
import About from "@/components/home/About";
import HowItWorks from "@/components/home/Process";
import CaseStudies from "@/components/CaseStudies";
import Parallax from "@/components/home/Parallax";
import Facts from "@/components/home/Facts";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import MainWrapper from "@/components/MainWrapper";

export default function Home() {

    return (
        <>
            <MainWrapper>
                <Navbar/>
                <Hero/>
                <Logos/>
                <About/>
                <HowItWorks/>
                <CaseStudies/>
                <Facts/>
                <Parallax/>
                <Marquee/>
            </MainWrapper>
            <Footer sticky/>
        </>
    );
}