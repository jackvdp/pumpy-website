import Image from "next/image"

export default function Hero() {
    return (
        <section className="bg-base-color bg-sliding-line p-0 full-screen ipad-top-space-margin position-relative overflow-hidden sm-h-auto">
            <div className="container-fluid p-0 h-100 position-relative">
                <div className="row h-100 g-0">
                    <div className="col-12 col-md-7 bg-base-color bg-sliding-line d-flex justify-content-center flex-column p-10 position-relative xl-p-6 md-p-5 sm-ps-30px sm-pe-30px sm-pt-50px sm-pb-50px order-2 order-md-1">
                        <div className="vertical-title-center align-items-end w-75px sm-w-60px justify-content-center position-absolute pb-50px sm-pb-30px right-3px">
                            <div className="title fs-16 text-dark-gray fw-700 text-uppercase ls-1px text-uppercase" data-fancy-text='{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ["Personalised Service"], "duration": 400, "delay": 0, "speed": 50, "easing": "easeOutQuad" }'></div>
                        </div>
                        <div className="separator-line h-120px w-2px bg-dark-gray position-absolute bottom-0px right-80px sm-right-60px"></div>
                        <div className="fs-140 xxl-fs-100 sm-fs-60 lh-95 fw-600 text-dark-gray mb-50px sm-mb-30px alt-font ls-minus-8px sm-ls-minus-2px"
                            data-anime='{ "el": "childs", "translateX": [80, 0], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
                        >
                            <div className="d-inline-block position-relative z-index-9">
                                <div className="highlight-separator mb-0" data-shadow-animation="true" data-animation-delay="1000">Digital<span><Image fill src="/imagesNew/highlight-separator.webp" alt="" /></span></div> solutions
                            </div>
                        </div>
                        <div className="fs-20 sm-fs-18 text-dark-gray mb-20px w-70 xxl-w-100 lg-w-100 sm-w-90 d-block"
                            data-anime='{ "el": "childs", "translateX": [110, 0], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
                        >
                            <span className="d-inline-block opacity-8">We build bespoke websites and apps tailored to your needs. Our agile approach ensures fast, personalized delivery of your digital vision.</span>
                        </div>
                        <div className="icon-with-text-style-08"
                            data-anime='{ "el": "childs", "translateX": [140, 0], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
                        >
                            <a href="/casestudies" target="blank" className="d-inline-block fs-20 ls-minus-05px alt-font fw-600 text-dark-gray text-dark-gray-hover">
                                <div className="feature-box-icon-hover feature-box feature-box-left-icon-middle">
                                    <div className="feature-box-icon feature-box-icon-rounded w-55px h-55px rounded-circle bg-dark-gray me-15px rounded-box">
                                        <i className="feather icon-feather-arrow-right text-base-color icon-small"></i>
                                    </div>
                                    <div className="feature-box-content">
                                        Learn more
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 position-relative order-1 order-md-2">
                        <div className="position-absolute left-0px bottom-0px bg-white z-index-9 p-65px md-p-40px w-360px d-none d-md-block">
                            <div className="position-absolute right-30px top-30px">
                                <i className="feather icon-feather-arrow-up-right icon-extra-medium text-dark-gray"></i>
                            </div>
                            <div
                                data-anime='{ "effect": "slide", "color": "#f97316", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
                            >
                                <div className="fancy-text-style-3 mt-30px">
                                    <h4 className="lh-40 alt-font text-dark-gray fw-600 ls-minus-2px image-mask cover-background mb-0" style={{ backgroundImage: "url('imagesNew/hero/hero4.webp')" }}>Building your digital presence together.</h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper h-100 banner-slider sm-h-450px swiper-light-pagination" data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-pagination-bullets", "clickable": true }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 4000, "stopOnLastSlide": true, "disableOnInteraction": false },"keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "fade" }'>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <Image fill className="position-absolute left-0px top-0px w-100 h-100 cover-background"
                                        src='/imagesNew/hero/hero2.webp' />
                                </div>
                                <div className="swiper-slide">
                                    <Image fill className="position-absolute left-0px top-0px w-100 h-100 cover-background"
                                        src='/imagesNew/hero/hero1.webp' />
                                </div>
                                <div className="swiper-slide">
                                    <Image fill className="position-absolute left-0px top-0px w-100 h-100 cover-background"
                                        src='/imagesNew/hero/hero3.webp' />
                                </div>
                            </div>
                            <div className="slider-one-slide-prev-1 icon-very-small text-white swiper-button-prev slider-navigation-style-06 d-none d-sm-inline-block"><i className="line-icon-Arrow-OutLeft icon-extra-large"></i></div>
                            <div className="slider-one-slide-next-1 icon-very-small text-white swiper-button-next slider-navigation-style-06 d-none d-sm-inline-block"><i className="line-icon-Arrow-OutRight icon-extra-large"></i></div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}