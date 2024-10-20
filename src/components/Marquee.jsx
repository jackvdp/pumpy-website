export default function Marquee() {
    return (
        <section className="half-section pb-0 bg-white">
            <div className="container-fluid">
                <div className="row position-relative">
                    <div className="col swiper swiper-width-auto text-center pb-20px md-pb-20px" data-slider-options='{ "slidesPerView": "auto", "spaceBetween":40, "speed": 8000, "loop": true, "allowTouchMove": false, "autoplay": { "delay":0, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'>
                        <div className="swiper-wrapper marquee-slide">
                            <div className="swiper-slide">
                                <div className="fs-140 lg-fs-130 md-fs-110 sm-fs-90 text-dark-gray fw-600 ls-minus-6px alt-font">design.</div>
                            </div>
                            <div className="swiper-slide">
                                <div className="fs-140 lg-fs-130 md-fs-110 sm-fs-90 fw-600 text-outline text-outline-color-extra-medium-gray ls-minus-6px alt-font">marketing.</div>
                            </div>
                            <div className="swiper-slide">
                                <div className="fs-140 lg-fs-130 md-fs-110 sm-fs-90 text-dark-gray fw-600 ls-minus-6px alt-font">development.</div>
                            </div>
                            <div className="swiper-slide">
                                <div className="fs-140 lg-fs-130 md-fs-110 sm-fs-90 fw-600 text-outline text-outline-color-extra-medium-gray ls-minus-6px alt-font">analytics.</div>
                            </div>
                            <div className="swiper-slide">
                                <div className="fs-140 lg-fs-130 md-fs-110 sm-fs-90 text-dark-gray fw-600 ls-minus-6px alt-font">tailored.</div>
                            </div>
                            <div className="swiper-slide">
                                <div className="fs-140 lg-fs-130 md-fs-110 sm-fs-90 fw-600 text-outline text-outline-color-extra-medium-gray ls-minus-6px alt-font">cost-effective.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}