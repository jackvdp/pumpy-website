"use client";

import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactFormAndMap() {
    return <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}>
        <section className="p-0">
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
                                    data-fancy-text='{ "effect": "rotate", "string": ["hello!", "hallå!", "olá!"] }'></span>
                            </h2>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </GoogleReCaptchaProvider>;
}
