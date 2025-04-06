import MainWrapper from "@/components/MainWrapper";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import AboutHeader from "@/components/About/AboutHeader";
import AboutDetails from "@/components/About/AboutDetails";
import AboutParallax from "@/components/About/AboutParallax";
import AboutPoints from "@/components/About/AboutPoints";
import AboutCaseStudies from "@/components/About/AboutCaseStudies";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <>
            <MainWrapper>
                <Navbar/>
                <AboutHeader/>
                <AboutDetails/>
                <AboutParallax/>
                <AboutPoints/>
                <AboutCaseStudies/>
                <Marquee/>
            </MainWrapper>
            <Footer/>
        </>
    )
}