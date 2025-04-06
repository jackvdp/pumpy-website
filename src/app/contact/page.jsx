import MainWrapper from "@/components/MainWrapper";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Contact/ContactForm";

function ContactHeader() {
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
                                Contact
                                <span><img src="/imagesNew/highlight-separator.webp" alt=""/></span>
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


function ContactBannerText() {
    return <section>
        <div className="container">
            <div className="row">
                <div className="col-12 col-xxl-9 col-xl-10"
                     data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 300, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                    <h2 className="text-dark-gray fw-600 alt-font ls-minus-3px w-95 md-w-100 highlight-separator-small mb-0 text-center text-lg-start">
                        Ready to get started?<br/> Please get in touch and let&#39;s talk!
                    </h2>
                </div>
            </div>
        </div>
    </section>;
}

function ContactFormMap() {
    return <section className="p-0">
        <div className="container-fluid p-0">
            <div className="row g-0"
                 data-anime='{ "el": "childs", "translateX": [-50, 0], "opacity": [0,1], "duration": 800, "delay": 300, "staggervalue": 150, "easing": "easeOutQuad" }'>
                <div className="col-xl-6">
                    <div id="map" className="map h-100 w-100 lg-h-600px sm-h-400px"
                         data-map-options='{ "lat": 51.5072, "lng": -0.1276, "style": "Dark", "marker": { "type": "HTML", "class": "marker02", "color": "#F4866E" }, "popup": { } }'></div>
                </div>
                <div className="col-xxl-4 col-xl-6 position-relative">
                    <div
                        className="contact-form-style-03 position-relative bg-base-color z-index-1 p-14 lg-p-10 sm-p-30px box-shadow-double-large overflow-hidden last-paragraph-no-margin">
                        <h2 className="h1 alt-font fw-700 text-dark-gray mb-30px sm-mb-20px fancy-text-style-4 ls-minus-2px">Say{" "}
                            <span
                                data-fancy-text='{ "effect": "rotate", "string": ["hello!", "hallå!", "salve!"] }'></span>
                        </h2>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}

export default function ContactPage() {
    return (
        <>
            <MainWrapper>
                <Navbar/>
                <ContactHeader/>
                <ContactBannerText/>
                <ContactFormMap/>
                <Marquee/>
            </MainWrapper>
            <Footer/>
        </>
    )
}