import {LogosNoContainer} from "@/components/Logos";

export default function AboutDetails() {
    return (
        <section>
            <div className="container">
                <div className="row mb-8 align-items-center">
                    <div className="col-lg-6 md-mb-50px sm-mb-30px">
                        <figure className="position-relative mb-0 overflow-hidden">
                            <img src="/imagesNew/about/header.png" className="w-100" alt=""/>
                            <figcaption
                                className="position-absolute text-center left-0px bottom-0px pt-35px pb-35px ps-15px pe-15px bg-white">
                                    <span
                                        className="fs-90 lh-85 text-dark-gray ls-minus-2px position-relative fw-700 mb-5px d-block alt-font">28<sub
                                        className="fs-40 lh-40 text-dark-gray position-relative top-minus-40px">+</sub></span>
                                <span
                                    className="d-block mx-auto fs-14 fw-600 lh-20 w-200px text-center text-dark-gray text-uppercase">Years working experience</span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1 text-center text-md-start"
                         data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <h2 className="text-dark-gray fw-600 ls-minus-3px alt-font highlight-separator-small">We&#39;re
                            a creative digital agency.</h2>
                        <p className="w-85 sm-w-100">We are excited for our work and how it positively impacts
                            clients. With over 28 years of experience we have been constantly providing
                            excellent
                            web solutions is best in-class experience.</p>
                        <p className="w-85 sm-w-100">We are excited for our work and how it positively impacts
                            clients. We constantly providing excellent web solutions is best in-class
                            experience.</p>
                        <div className="d-inline-block w-100 mt-15px sm-mt-0">
                            <a href="#"
                               className="btn btn-large btn-dark-gray btn-box-shadow d-inline-block align-middle me-20px sm-me-0 sm-mb-30px">Let&#39;s
                                talk now<i className="fa-regular fa-envelope"></i></a>
                            <a href="tel:1800222000"
                               className="d-block d-md-inline-block align-middle text-dark-gray text-dark-gray-hover fs-18 fw-600"><i
                                className="feather icon-feather-phone-call icon-small me-10px"></i>1 800 222 000</a>
                        </div>
                    </div>
                </div>
                <LogosNoContainer/>
            </div>
        </section>
    )
}