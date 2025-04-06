import MainWrapper from "@/components/MainWrapper";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import AboutHeader from "@/components/About/AboutHeader";
import AboutDetails from "@/components/About/AboutDetails";

export default function About() {
    return (
        <>
            <MainWrapper>
                <Navbar/>
                <AboutHeader/>
                <AboutDetails/>
                <section className="pb-0" data-parallax-background-ratio="0.5"
                         style={{backgroundImage: "url(https://placehold.co/1920x1100)"}}>
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
                                    data-anime='{ "translateY": [15, 0],"opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>Forward
                                    thinking team of designers, copywriters and developers. </h2>
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
                                            <span className="alt-font text-white fs-20 lg-fs-18">Trusted company</span>
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
                                            <span className="alt-font text-white fs-20 lg-fs-18">Award winning</span>
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
                <section className="pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 md-mb-10px"
                                 data-anime='{ "el": "childs", "translateY": [15, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                                <h2 className="text-dark-gray fw-600 ls-minus-3px alt-font highlight-separator-small">We
                                    want to bring and business the <span className="highlight-separator mb-0 pb-0"
                                                                         data-shadow-animation="true"
                                                                         data-animation-delay="500">digital<span><img
                                        src="images/demo-digital-agency-highlight-separator.png"
                                        alt=""/></span></span> world.</h2>
                            </div>
                            <div className="col-lg-7"
                                 data-anime='{ "el": "childs", "translateY": [15, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div
                                            className="fs-19 fw-600 text-dark-gray w-90 xl-w-100 sm-mb-10px">Successfully
                                            finished projects with creativity.
                                        </div>
                                    </div>
                                    <div className="col-md-7 last-paragraph-no-margin">
                                        <p>We value each and every human life placed our hands constantly work towards
                                            meeting the expectations of our customers.</p>
                                    </div>
                                </div>
                                <div
                                    className="separator-line-1px border-bottom border-color-extra-medium-gray mt-40px mb-40px sm-mt-30px sm-mb-30px"></div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="fs-19 fw-600 text-dark-gray w-90 xl-w-100 sm-mb-10px">Work
                                            together
                                            for better branding solutions.
                                        </div>
                                    </div>
                                    <div className="col-md-7 last-paragraph-no-margin">
                                        <p>We value each and every human life placed our hands constantly work towards
                                            meeting the expectations of our customers.</p>
                                    </div>
                                </div>
                                <div
                                    className="separator-line-1px border-bottom border-color-extra-medium-gray mt-40px mb-40px sm-mt-30px sm-mb-30px"></div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="fs-19 fw-600 text-dark-gray w-90 xl-w-100 sm-mb-10px">Committed
                                            to
                                            deliver unique digital media.
                                        </div>
                                    </div>
                                    <div className="col-md-7 last-paragraph-no-margin">
                                        <p>We value each and every human life placed our hands constantly work towards
                                            meeting the expectations of our customers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pb-0">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 transition-inner-all">
                            <div className="col team-style-08 md-mb-30px"
                                 data-bottom-top="transform:scale(1, 1) translateY(-30px);"
                                 data-top-bottom="transform:scale(0.7, 0.7) translateY(30px);">
                                <figure className="mb-0 position-relative overflow-hidden">
                                    <img src="https://placehold.co/600x740" alt=""/>
                                    <figcaption
                                        className="w-100 h-100 d-flex align-items-end p-13 lg-p-8 md-p-13 sm-p-9 bg-gradient-gray-light-dark-transparent">
                                        <div className="w-100">
                                        <span
                                            className="team-member-name fs-19 fw-500 text-white d-block">Jessica dover</span>
                                            <span
                                                className="member-designation fs-16 lh-26 text-white d-block">Designer</span>
                                        </div>
                                        <div className="social-icon d-flex flex-column flex-shrink-1">
                                            <a href="https://www.twitter.com/" target="_blank"
                                               className="text-black w-55px h-55px"><i
                                                className="fa-brands fa-twitter icon-small"></i></a>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col team-style-08 mt-2 md-mt-0 md-mb-30px"
                                 data-bottom-top="transform:scale(1, 1)" data-top-bottom="transform:scale(1.2, 1.2)">
                                <figure className="mb-0 position-relative overflow-hidden">
                                    <img src="https://placehold.co/600x740" alt=""/>
                                    <figcaption
                                        className="w-100 h-100 d-flex align-items-end p-13 lg-p-8 md-p-13 sm-p-9 bg-gradient-gray-light-dark-transparent">
                                        <div className="w-100">
                                        <span
                                            className="team-member-name fs-19 fw-500 text-white d-block">Jeremy dupont</span>
                                            <span
                                                className="member-designation fs-16 lh-26 text-white d-block">Director</span>
                                        </div>
                                        <div className="social-icon d-flex flex-column flex-shrink-1">
                                            <a href="https://www.linkedin.com/" target="_blank"
                                               className="text-black w-55px h-55px"><i
                                                className="fa-brands fa-linkedin-in icon-small"></i></a>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col team-style-08"
                                 data-bottom-top="transform:scale(1, 1) translateY(-30px);"
                                 data-top-bottom="transform:scale(0.7, 0.7) translateY(30px);">
                                <figure className="mb-0 position-relative overflow-hidden">
                                    <img src="https://placehold.co/600x740" alt=""/>
                                    <figcaption
                                        className="w-100 h-100 d-flex align-items-end p-13 lg-p-8 md-p-13 sm-p-9 bg-gradient-gray-light-dark-transparent">
                                        <div className="w-100">
                                            <span className="team-member-name fs-19 fw-500 text-white d-block">Matthew taylor</span>
                                            <span
                                                className="member-designation fs-16 lh-26 text-white d-block">Manager</span>
                                        </div>
                                        <div className="social-icon d-flex flex-column flex-shrink-1">
                                            <a href="https://www.facebook.com/" target="_blank"
                                               className="text-black w-55px h-55px"><i
                                                className="fa-brands fa-facebook-f icon-small"></i></a>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <Marquee/>

            </MainWrapper>
            {/*<Footer/>*/}
        </>
    )
}