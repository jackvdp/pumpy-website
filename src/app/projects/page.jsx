import MainWrapper from "@/components/MainWrapper";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";
import Image from "next/image";

function ProjectHeader() {
    return (
        <section className="page-title-separate-breadcrumbs bg-base-color bg-sliding-line ipad-top-space-margin">
            <div className="container position-relative">
                <div
                    className="row justify-content-center align-items-lg-end extra-very-small-screen"
                    data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div className="col-lg-6 position-relative page-title-extra-large md-mb-30px sm-mb-20px z-index-9">
                        <h1 className="text-dark-gray fw-600 ls-minus-4px mb-0 alt-font highlight-separator-small">
                            <span className="highlight-separator mb-0 pb-0" data-shadow-animation="true"
                                  data-animation-delay="500">
                                Case Studies
                                <span><Image fill src="/imagesNew/highlight-separator.webp" alt=""/></span>
                            </span>
                        </h1>
                    </div>
                    <div className="col-lg-6">
                        <p className="fs-20 lh-32 text-dark-gray opacity-7 w-90 lg-w-100 md-w-80 sm-w-100 mb-0">
                            Have a project in mind or just want to chat about ideas? Drop a line at <a
                            className={"text-link"}
                            href="mailto:jack@vanderpump.tech">jack@vanderpump.tech</a> — let&#39;s talk!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ProjectPage() {
    return (
        <>
            <MainWrapper>
                <Navbar/>
                <ProjectHeader/>
                <CaseStudies showTitle={false}/>
                <Marquee/>
            </MainWrapper>
            <Footer/>
        </>
    )
}