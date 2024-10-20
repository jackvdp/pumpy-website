export default function About() {
    return (
        <section className="overflow-hidden bg-white">
            <div className="container">
                <div className="row align-items-center mb-6 sm-mb-50px">
                    <div className="col-xl-5 col-lg-5 md-mb-50px sm-mb-30px text-center text-md-start">
                        <h2 className="text-dark-gray fw-600 ls-minus-3px mb-0 alt-font highlight-separator-small">Creating websites & mobile apps that work for <span className="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">you.<span><img src="imagesNew/highlight-separator.png" alt="" /></span></span></h2>
                    </div>
                    <div className="col-xl-6 col-lg-7 offset-xl-1 last-paragraph-no-margin">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-5 position-relative atropos transform-3d sm-mb-30px text-center text-md-start text-lg-center" data-anime='{ "el": "childs", "translateY": [0, 0],"scale": [1.1, 1],"opacity": [0,1], "duration": 500, "delay": 200, "staggervalue": 300, "easing": "easeInSine" }'>
                                <div className="atropos d-inline-block" data-atropos data-atropos-perspective="500">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner text-center overflow-visible">
                                                <div data-atropos-offset="-5" className="position-relative">
                                                    <span className="w-250px h-250px rounded-circle d-flex align-items-center justify-content-center bg-dark-gray bg-sliding-line-dark-gray">
                                                        <span className="fs-110 text-white alt-font fw-700 d-flex ls-minus-4px w-100 justify-content-center">100
                                                            <sub className="align-top fs-40 fw-500 position-relative top-0px">%</sub>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-7 text-center text-md-start" data-anime='{ "el": "childs", "translateY": [-15, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
                                <span className="fs-16 text-uppercase ls-05px text-dark-gray fw-700 d-block mb-5px">100% Client focussed</span>
                                <p className="fs-18 lh-32">The priority is meeting your unique needs, and providing a personalised and tailored service to match at a reasonable price.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Features />
            </div>
        </section>
    )
}

function Features() {
    const features = [
        {
            firstWord: "Personal Service.",
            text: "Bespoke solutions tailored to your vision and objectives.",
            icon: "bi-people"
        },
        {
            firstWord: "Fast Delivery.",
            text: "Quick turnaround of high-quality, customized digital assets.",
            icon: "bi-rocket"
        },
        {
            firstWord: "Cost-Effective.",
            text: "Premium results that fit your budget without agency overhead.",
            icon: "bi-lightning"
        }
    ];

    return (
        <div className="row row-cols-1 row-cols-lg-3 justify-content-center" data-anime='{ "el": "childs", "translateY": [30, 0], "translateX": [30, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
            {features.map((feature, index) => (
                <div key={index} className="col icon-with-text-style-01 pe-5 md-mb-30px">
                    <div className="separator-line-1px bg-extra-medium-gray w-100 mb-30px d-none d-lg-block"></div>
                    <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                        <div className="feature-box-content">
                            <span className="fs-18 w-80 sm-w-90 d-block"><span className="fw-700 text-dark-gray ls-minus-1px">{feature.firstWord}</span> {feature.text}</span>
                        </div>
                        <div className="feature-box-icon me-0 mt-5px md-mt-0">
                            <i className={`bi ${feature.icon} text-dark-gray icon-medium`}></i>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
