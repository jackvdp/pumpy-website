export default function AboutParallax() {
    return (
        <section className="pb-0" data-parallax-background-ratio="0.5"
                 style={{backgroundImage: "url(/imagesNew/codebg.webp)"}}>
            <div className="opacity-light bg-dark-gray"></div>
            <div className="container position-relative">
                <div className="row justify-content-center mb-6">
                    <div className="col-xxl-7 col-xl-10 text-center">
                        <a href="https://www.youtube.com/watch?v=cfXHhfNy7tU" className="popup-youtube"
                           data-anime='{ "el": "childs", "translateY": [-15, 0], "scale": [0.8, 1], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
                            <div className="position-relative z-index-9 mb-40px sm-mb-30px">
                                <img src="images/demo-digital-agency-about-play-text.png"
                                     className="animation-rotation" alt=""/>
                                <div className="absolute-middle-center w-100 z-index-minus-1"><img
                                    src="images/demo-digital-agency-about-play.png" alt=""/></div>
                            </div>
                        </a>
                        <h2 className="alt-font text-white ls-minus-2px text-shadow-extra-large highlight-separator-small"
                            data-anime='{ "translateY": [15, 0],"opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>An
                            agile, independent software engineer dedicated to your success. </h2>
                    </div>
                </div>
            </div>
            <div className="bg-dark-gray-transparent-medium blur-box pt-40px pb-40px">
                <div className="container">
                    <div
                        className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center align-items-center"
                        data-anime='{ "el": "childs", "translateX": [15, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <div className="col icon-with-text-style-08 md-mb-30px text-center">
                            <div
                                className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
                                <div className="feature-box-icon me-15px">
                                    <i className="line-icon-Archery-2 icon-medium text-white"></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="alt-font text-white fs-20 lg-fs-18">Trusted collaboration</span>
                                </div>
                            </div>
                        </div>
                        <div className="col icon-with-text-style-08 md-mb-30px text-center">
                            <div
                                className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
                                <div className="feature-box-icon me-15px">
                                    <i className="line-icon-Moustache-Smiley icon-medium text-white"></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="alt-font text-white fs-20 lg-fs-18">Personalised approach</span>
                                </div>
                            </div>
                        </div>
                        <div className="col icon-with-text-style-08 xs-mb-30px text-center">
                            <div
                                className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
                                <div className="feature-box-icon me-15px">
                                    <i className="line-icon-Management icon-medium text-white"></i>
                                </div>
                                <div className="feature-box-content">
                                            <span
                                                className="alt-font text-white fs-20 lg-fs-18">Professional work</span>
                                </div>
                            </div>
                        </div>
                        <div className="col icon-with-text-style-08 text-center">
                            <div
                                className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
                                <div className="feature-box-icon me-15px">
                                    <i className="line-icon-Speach-Bubbles icon-medium text-white"></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="alt-font text-white fs-20 lg-fs-18">Help any time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}