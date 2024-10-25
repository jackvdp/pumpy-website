"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainWrapper from "@/components/MainWrapper";
import { useForm } from '@formspree/react';

export default function NotFoundPage() {
    return (
        <>
            <MainWrapper>
                <Navbar />
                <section className="cover-background overflow-auto full-screen position-relative" style={{ backgroundImage: "url(imagesNew/coming-soon.jpg);" }}>
                    <div id="particles-style-01" className="position-absolute h-100 top-0 left-0 w-100" data-particle="true" data-particle-options='{"particles":{"number":{"value":10,"density":{"enable":true,"value_area":800}},"color":{"value":"#b0b4e2"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}'></div>
                    <div className="container h-100">
                        <div className="row align-items-center justify-content-center h-100 z-index-2 position-relative">
                            <div className="col-md-12 col-lg-10 col-xl-8 col-xxl-7 text-center" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                                <a className="mb-10 md-mb-50px d-inline-block" href="index.html">
                                    <img src="imagesNew/logo.webp" data-at2x="imagesNew/logo.webp" alt="" />
                                </a>
                                <h1 className="fw-700 fs-70 mb-10px text-dark-gray ls-minus-2px mb-5">Coming soon!</h1>
                                <div className="d-inline-block w-100 newsletter-style-03 position-relative mb-8 lg-mb-15 md-mb-6">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainWrapper>
            <Footer />
        </>

    )
}

function ContactForm() {
    const [state, handleSubmit] = useForm("mzzbzqjz");

    return (
        <>
            {state.succeeded ? (
                <div className="border-radius-4px pt-15px pb-15px ps-15px pe-15px w-100 text-center bg-success-subtle">
                    <i className="bi bi-check-circle me-2"></i>
                    <span className="fs-14 text-success">We&apos;ll be in touch!</span>
                </div>
            ) : (<form onSubmit={handleSubmit} className="position-relative lg-w-100 w-80 mx-auto">
                <div className="position-relative">
                    <input className="input-large bg-white border-color-transparent w-100 border-radius-5px box-shadow-extra-large form-control required" type="email" name="email" placeholder="Enter your email address" />
                    <input type="hidden" name="redirect" value="" />
                    <button className="btn btn-extra-large text-dark-gray ls-0px left-icon text-transform-none fw-600"><i className="icon feather icon-feather-mail icon-small align-middle"></i><span>Let&apos;s talk!</span></button>
                </div>
                <div className="form-results border-radius-100px mt-15px p-15px fs-15 w-100 text-center d-none"></div>
            </form>)}
        </>
    )
}