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
                                        className="fs-90 lh-85 text-dark-gray ls-minus-2px position-relative fw-700 mb-5px d-block alt-font">50<sub
                                        className="fs-40 lh-40 text-dark-gray position-relative top-minus-40px">+</sub></span>
                                <span
                                    className="d-block mx-auto fs-14 fw-600 lh-20 w-200px text-center text-dark-gray text-uppercase">Projects completed</span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1 text-center text-md-start"
                         data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <h2 className="text-dark-gray fw-600 ls-minus-3px alt-font highlight-separator-small">Your
                            independent digital partner.</h2>
                        <p className="w-85 sm-w-100">Passionate about crafting custom digital experiences that directly
                            support your goals. Each solution is built personally for you, ensuring meaningful impact
                            and seamless collaboration every step of the way.</p>
                        <p className="w-85 sm-w-100">I&#39;ve worked with major government departments, some of the
                            biggest
                            banks, independent fintech firms, and construction companies. What unites all my work is a
                            commitment to dedicated, fast, and cost-effective service.</p>
                        <div className="d-inline-block w-100 mt-15px sm-mt-0">
                            <a href="/contact"
                               className="btn btn-large btn-dark-gray btn-box-shadow d-inline-block align-middle me-20px sm-me-0 sm-mb-30px">Let&#39;s
                                talk now<i className="fa-regular fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <LogosNoContainer/>
            </div>
        </section>
    )
}