"use client"

import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import loadScript from "@/utils/loadScript";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import About from "@/components/About";
import HowItWorks from "@/components/Process";

export default function Home() {
  const scriptsLoadedRef = useRef(false);

  useEffect(() => {
    const loadScripts = async () => {
      try {
        await loadScript('/js/jquery.js');
        await loadScript('/js/vendors.min.js');
        await loadScript('/js/main.js');
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    if (!scriptsLoadedRef.current) {
      scriptsLoadedRef.current = true;
      loadScripts();
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        ['jquery.js', 'vendors.min.js', 'main.js'].forEach(src => {
          const script = document.querySelector(`script[src="/js/${src}"]`);
          if (script) {
            document.body.removeChild(script);
          }
        });
        scriptsLoadedRef.current = false;
      }
    };
  }, []);

  return (
    <div data-mobile-nav-style="full-screen-menu" data-mobile-nav-bg-color="#2d2c2b" className="custom-cursor">
      <div className="cursor-page-inner">
        <div className="circle-cursor circle-cursor-inner"></div>
        <div className="circle-cursor circle-cursor-outer"></div>
      </div>
      <Navbar />
      <Hero />
      <Logos />
      <About />
      <HowItWorks />
      <section className="pb-0 overflow-hidden position-relative">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-xl-5 lg-mb-30px text-center text-xl-start">
              <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mb-0">Case studies</h2>
            </div>
            <div className="col-xl-7 tab-style-04 text-center text-xl-end">
              <ul className="portfolio-filter nav nav-tabs justify-content-center justify-content-xl-end border-0">
                <li className="nav active"><a data-filter="*" href="#">All</a></li>
                <li className="nav"><a data-filter=".selected" href="#">Selected</a></li>
                <li className="nav"><a data-filter=".digital" href="#">Digital</a></li>
                <li className="nav"><a data-filter=".branding" href="#">Branding</a></li>
                <li className="nav"><a data-filter=".web" href="#">Web</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 filter-content p-lg-0">
              <ul className="portfolio-attractive portfolio-wrapper grid-loading grid grid-3col xxl-grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large text-center">
                <li className="grid-sizer"></li>
                <li className="grid-item selected digital transition-inner-all" data-atropos data-atropos-perspective="1450">
                  <div className="position-relative">
                    <a href="demo-digital-agency-single-project-minimal.html" className="portfolio-link"></a>
                    <div className="atropos-scale">
                      <div className="atropos-rotate">
                        <div className="atropos-inner" data-atropos-offset="3">
                          <div className="portfolio-box bg-nero-gray">

                            <div className="portfolio-image">
                              <img src="https://via.placeholder.com/750x905" alt="" />
                            </div>
                            <div className="portfolio-hover justify-content-end align-items-center d-flex flex-column pt-40px pb-40px sm-pt-30px sm-pb-30px">
                              <span className="icon-box z-index-1 mb-auto ms-auto me-30px"><i className="bi bi-arrow-up-right icon-very-medium text-white" aria-hidden="true"></i></span>
                              <div className="text-white fs-22 move-top-bottom-self"><span>Tailoring</span></div>
                              <div className="fs-15 lh-28 text-white opacity-6 move-bottom-top-self"><span>Brochure</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="grid-item selected branding transition-inner-all" data-atropos data-atropos-perspective="1450">
                  <div className="position-relative">
                    <a href="demo-digital-agency-single-project-minimal.html" className="portfolio-link"></a>
                    <div className="atropos-scale">
                      <div className="atropos-rotate">
                        <div className="atropos-inner" data-atropos-offset="3">
                          <div className="portfolio-box bg-dark-gray">
                            <div className="portfolio-image">
                              <img src="https://via.placeholder.com/750x905" alt="" />
                            </div>
                            <div className="portfolio-hover justify-content-end align-items-center d-flex flex-column pt-40px pb-40px sm-pt-30px sm-pb-30px">
                              <span className="icon-box z-index-1 mb-auto ms-auto me-30px"><i className="bi bi-arrow-up-right icon-very-medium text-white" aria-hidden="true"></i></span>
                              <div className="text-white fs-22 move-top-bottom-self"><span>Violator</span></div>
                              <div className="fs-15 lh-28 text-white opacity-6 move-bottom-top-self"><span>Branding</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="grid-item web branding transition-inner-all" data-atropos data-atropos-perspective="1450">
                  <div className="position-relative">
                    <a href="demo-digital-agency-single-project-minimal.html" className="portfolio-link"></a>
                    <div className="atropos-scale">
                      <div className="atropos-rotate">
                        <div className="atropos-inner" data-atropos-offset="3">
                          <div className="portfolio-box bg-dark-gray">
                            <div className="portfolio-image">
                              <img src="https://via.placeholder.com/750x905" alt="" />
                            </div>
                            <div className="portfolio-hover justify-content-end align-items-center d-flex flex-column pt-40px pb-40px sm-pt-30px sm-pb-30px">
                              <span className="icon-box z-index-1 mb-auto ms-auto me-30px"><i className="bi bi-arrow-up-right icon-very-medium text-white" aria-hidden="true"></i></span>
                              <div className="text-white fs-22 move-top-bottom-self"><span>Gardner</span></div>
                              <div className="fs-15 lh-28 text-white opacity-6 move-bottom-top-self"><span>Branding</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="grid-item selected digital transition-inner-all" data-atropos data-atropos-perspective="1450">
                  <div className="position-relative">
                    <a href="demo-digital-agency-single-project-minimal.html" className="portfolio-link"></a>
                    <div className="atropos-scale">
                      <div className="atropos-rotate">
                        <div className="atropos-inner" data-atropos-offset="3">
                          <div className="portfolio-box bg-dark-gray">
                            <div className="portfolio-image">
                              <img src="https://via.placeholder.com/750x905" alt="" />
                            </div>
                            <div className="portfolio-hover justify-content-end align-items-center d-flex flex-column pt-40px pb-40px sm-pt-30px sm-pb-30px">
                              <span className="icon-box z-index-1 mb-auto ms-auto me-30px"><i className="bi bi-arrow-up-right icon-very-medium text-white" aria-hidden="true"></i></span>
                              <div className="text-white fs-22 move-top-bottom-self"><span>Identity</span></div>
                              <div className="fs-15 lh-28 text-white opacity-6 move-bottom-top-self"><span>Poster</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="grid-item selected web digital branding transition-inner-all" data-atropos data-atropos-perspective="1450">
                  <div className="position-relative">
                    <a href="demo-digital-agency-single-project-minimal.html" className="portfolio-link"></a>
                    <div className="atropos-scale">
                      <div className="atropos-rotate">
                        <div className="atropos-inner" data-atropos-offset="3">
                          <div className="portfolio-box bg-dark-gray">
                            <div className="portfolio-image">
                              <img src="https://via.placeholder.com/750x905" alt="" />
                            </div>
                            <div className="portfolio-hover justify-content-end align-items-center d-flex flex-column pt-40px pb-40px sm-pt-30px sm-pb-30px">
                              <span className="icon-box z-index-1 mb-auto ms-auto me-30px"><i className="bi bi-arrow-up-right icon-very-medium text-white" aria-hidden="true"></i></span>
                              <div className="text-white fs-22 move-top-bottom-self"><span>Educamp</span></div>
                              <div className="fs-15 lh-28 text-white opacity-6 move-bottom-top-self"><span>Packaging</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="grid-item web digital branding transition-inner-all" data-atropos data-atropos-perspective="1450">
                  <div className="position-relative">
                    <a href="demo-digital-agency-single-project-minimal.html" className="portfolio-link"></a>
                    <div className="atropos-scale">
                      <div className="atropos-rotate">
                        <div className="atropos-inner" data-atropos-offset="3">
                          <div className="portfolio-box bg-dark-gray">
                            <div className="portfolio-image">
                              <img src="https://via.placeholder.com/750x905" alt="" />
                            </div>
                            <div className="portfolio-hover justify-content-end align-items-center d-flex flex-column pt-40px pb-40px sm-pt-30px sm-pb-30px">
                              <span className="icon-box z-index-1 mb-auto ms-auto me-30px"><i className="bi bi-arrow-up-right icon-very-medium text-white" aria-hidden="true"></i></span>
                              <div className="text-white fs-22 move-top-bottom-self"><span>Designs</span></div>
                              <div className="fs-15 lh-28 text-white opacity-6 move-bottom-top-self"><span>Graphic</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="grid-item selected web branding transition-inner-all" data-atropos data-atropos-perspective="1450">
                  <div className="position-relative">
                    <a href="demo-digital-agency-single-project-minimal.html" className="portfolio-link"></a>
                    <div className="atropos-scale">
                      <div className="atropos-rotate">
                        <div className="atropos-inner" data-atropos-offset="3">
                          <div className="portfolio-box bg-dark-gray">
                            <div className="portfolio-image">
                              <img src="https://via.placeholder.com/750x905" alt="" />
                            </div>
                            <div className="portfolio-hover justify-content-end align-items-center d-flex flex-column pt-40px pb-40px sm-pt-30px sm-pb-30px">
                              <span className="icon-box z-index-1 mb-auto ms-auto me-30px"><i className="bi bi-arrow-up-right icon-very-medium text-white" aria-hidden="true"></i></span>
                              <div className="text-white fs-22 move-top-bottom-self"><span>Pixflow</span></div>
                              <div className="fs-15 lh-28 text-white opacity-6 move-bottom-top-self"><span>Branding</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="grid-item selected web digital branding transition-inner-all" data-atropos data-atropos-perspective="1450">
                  <div className="position-relative">
                    <a href="demo-digital-agency-single-project-minimal.html" className="portfolio-link"></a>
                    <div className="atropos-scale">
                      <div className="atropos-rotate">
                        <div className="atropos-inner" data-atropos-offset="3">
                          <div className="portfolio-box bg-dark-gray">
                            <div className="portfolio-image">
                              <img src="https://via.placeholder.com/750x905" alt="" />
                            </div>
                            <div className="portfolio-hover justify-content-end align-items-center d-flex flex-column pt-40px pb-40px sm-pt-30px sm-pb-30px">
                              <span className="icon-box z-index-1 mb-auto ms-auto me-30px"><i className="bi bi-arrow-up-right icon-very-medium text-white" aria-hidden="true"></i></span>
                              <div className="text-white fs-22 move-top-bottom-self"><span>Cropo</span></div>
                              <div className="fs-15 lh-28 text-white opacity-6 move-bottom-top-self"><span>Branding</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="grid-item web digital transition-inner-all" data-atropos data-atropos-perspective="1450">
                  <div className="position-relative">
                    <a href="demo-digital-agency-single-project-minimal.html" className="portfolio-link"></a>
                    <div className="atropos-scale">
                      <div className="atropos-rotate">
                        <div className="atropos-inner" data-atropos-offset="3">
                          <div className="portfolio-box bg-dark-gray">
                            <div className="portfolio-image">
                              <img src="https://via.placeholder.com/750x905" alt="" />
                            </div>
                            <div className="portfolio-hover justify-content-end align-items-center d-flex flex-column pt-40px pb-40px sm-pt-30px sm-pb-30px">
                              <span className="icon-box z-index-1 mb-auto ms-auto me-30px"><i className="bi bi-arrow-up-right icon-very-medium text-white" aria-hidden="true"></i></span>
                              <div className="text-white fs-22 move-top-bottom-self"><span>Herbal</span></div>
                              <div className="fs-15 lh-28 text-white opacity-6 move-bottom-top-self"><span>Graphic</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mb-3 sm-mb-0">
            <div className="col-12 col-xxl-9 col-xl-10">
              <h2 className="text-dark-gray fw-600 alt-font ls-minus-3px w-95 md-w-100 highlight-separator-small">Intuition and strategy integrate the research methodology that we also apply to <span className="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500"> traditional<span><img src="images/demo-digital-agency-highlight-separator.png" alt="" /></span></span> media.</h2>
            </div>
          </div>
          <div className="row mb-3 md-mb-0">
            <div className="col-12 col-lg-4 col-md-8 md-mb-50px">
              <div className="position-sticky top-120px" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <p className="w-75 lg-w-100 mb-40px">We combine human empathy and intelligent data to provide the <span className="text-dark-gray text-decoration-line-bottom fw-600">highest level of satisfaction.</span></p>
                <a href="#" className="btn btn-large btn-dark-gray btn-box-shadow">Let's talk now<i className="fa-regular fa-envelope"></i></a>
              </div>
            </div>
            <div className="col-12 col-lg-8 col-md-12">
              <div className="row g-0 counter-style-04" data-anime='{ "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <div className="col-12 col-md-6 border-start border-bottom border-color-extra-medium-gray sm-border-end ps-60px pe-60px lg-ps-40px lg-pe-40px lg-pt-30px pt-40px pb-30px">
                  <p className="fs-19 text-dark-gray mb-30 fw-500 w-85 sm-mb-15">Users on marketplaces we've created in 2023.</p>
                  <h2 className="alt-font vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px mt-20 sm-mb-0" data-text="+" data-to="8500"><sup className="top-0"><i className="feather icon-feather-arrow-up icon-very-medium text-dark-gray"></i></sup></h2>
                </div>
                <div className="col-12 col-md-6 border-start border-bottom border-end border-color-extra-medium-gray ps-60px pe-60px lg-ps-40px lg-pe-40px lg-pt-30px pt-40px pb-30px">
                  <p className="fs-19 text-dark-gray mb-30 fw-500 w-85 sm-mb-15">Successfully finished projects with creativity.</p>
                  <h2 className="alt-font vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px mt-20 sm-mb-0" data-text="+" data-to="660"><sup className="top-0"><i className="feather icon-feather-arrow-up icon-very-medium text-dark-gray"></i></sup></h2>
                </div>
                <div className="col-12 col-md-6 border-start border-color-extra-medium-gray sm-border-bottom sm-border-end ps-60px pe-60px lg-ps-40px lg-pe-40px lg-pt-30px pt-40px pb-30px">
                  <p className="fs-19 text-dark-gray mb-30 fw-500 w-85 sm-mb-15">Monthly visitors on our e-Commerce platform.</p>
                  <h2 className="alt-font vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px mt-20 sm-mb-0" data-text="+" data-to="6834"><sup className="top-0"><i className="feather icon-feather-arrow-up icon-very-medium text-dark-gray"></i></sup></h2>
                </div>
                <div className="col-12 col-md-6 border-start border-end border-color-extra-medium-gray ps-60px pe-60px lg-ps-40px lg-pe-40px lg-pt-30px pt-40px pb-30px">
                  <p className="fs-19 text-dark-gray mb-30 fw-500 w-85 sm-mb-15">Onboarding conversions growth increased.</p>
                  <h2 className="alt-font vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px mt-20 sm-mb-0" data-text="%" data-to="300"><sup className="top-0"><i className="feather icon-feather-arrow-up icon-very-medium text-dark-gray"></i></sup></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="big-section" data-parallax-background-ratio="0.5" style={{ backgroundImage: "url(https://via.placeholder.com/1920x1100)" }}>
        <div className="container">
          <div className="row mb-15">
            <div className="col-12 col-xxl-7 col-xl-8">
              <h2 className="text-dark-gray text-white alt-font fw-500 ls-minus-2px w-95 md-w-100" data-fancy-text='{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ["Forward thinking team of designers, copywriters and developers."], "duration": 400, "delay": 0, "speed": 20, "easing": "easeOutQuad" }'></h2>
            </div>
          </div>
          <div className="row" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="col-6 col-lg-3 col-md-4">
              <a href="#"><img src="images/demo-digital-agency-envato.svg" alt="" /></a>
              <div className="fs-14 fw-500 text-white border-top border-color-dark-gray pt-15px mt-30px text-uppercase">3x site of the day</div>
            </div>
            <div className="col-6 col-lg-3 col-md-4">
              <a href="#"><img src="images/demo-digital-agency-awwards.svg" alt="" /></a>
              <div className="fs-14 fw-500 text-white border-top border-color-dark-gray pt-15px mt-30px text-uppercase">2x developer award</div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-0">
        <div className="container">
          <div className="row align-items-center mb-4" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="col-md-6 text-center text-md-start sm-mb-20px">
              <h2 className="fw-600 text-dark-gray mb-0 ls-minus-3px alt-font">Our journal</h2>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="demo-digital-agency-blog.html" className="btn btn-link btn-hover-animation-switch primary-font text-dark-gray fs-18">
                <span>
                  <span className="btn-text">Read all posts</span>
                  <span className="btn-icon"><i className="feather icon-feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather icon-feather-arrow-right"></i></span>
                </span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-md-0">
              <ul className="blog-only-text blog-wrapper grid-loading grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large" data-anime='{"el": "childs", "translateY": [0, 0], "perspective": [1200,1200], "scale": [1.1, 1], "rotateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <li className="grid-sizer"></li>
                <li className="grid-item">
                  <div className="card bg-base-color border-radius-0px border-0 h-100 overflow-hidden">
                    <div className="card-body hover-box dark-hover p-15 lg-p-10">
                      <img src="https://via.placeholder.com/754x833" className="hover-img" alt="" />
                      <a href="#" className="categories-btn ms-0 bg-white text-dark-gray text-uppercase fw-600 mb-70px">Branding</a>
                      <a href="#" className="fs-13 text-uppercase d-block mb-5px text-dark-gray fw-500 mt-60px">Jonse robbert</a>
                      <a href="demo-digital-agency-blog-single-creative.html" className="card-title d-block fs-22 sm-fs-20 ls-minus-05px fw-500 text-dark-gray mb-0 w-90 lg-w-100">Design can speak the in tongue of art force of commerce.</a>
                    </div>
                  </div>
                </li>
                <li className="grid-item">
                  <div className="card bg-base-color border-radius-0px border-0 h-100 overflow-hidden">
                    <div className="card-body hover-box dark-hover p-15 lg-p-10">
                      <img src="https://via.placeholder.com/754x833" className="hover-img" alt="" />
                      <a href="#" className="categories-btn ms-0 bg-white text-dark-gray text-uppercase fw-600 mb-70px">Design</a>
                      <a href="#" className="fs-13 text-uppercase d-block mb-5px text-dark-gray fw-500 mt-60px">Den viliamson</a>
                      <a href="demo-digital-agency-blog-single-creative.html" className="card-title d-block fs-22 sm-fs-20 ls-minus-05px fw-500 text-dark-gray mb-0 w-90 lg-w-100">Simplicity is process the obvious and adding meaningful.</a>
                    </div>
                  </div>
                </li>
                <li className="grid-item">
                  <div className="card bg-base-color border-radius-0px border-0 h-100 overflow-hidden">
                    <div className="card-body hover-box dark-hover p-15 lg-p-10">
                      <img src="https://via.placeholder.com/754x833" className="hover-img" alt="" />
                      <a href="#" className="categories-btn ms-0 bg-white text-dark-gray text-uppercase fw-600 mb-70px">Digital</a>
                      <a href="#" className="fs-13 text-uppercase d-block mb-5px text-dark-gray fw-500 mt-60px">Rosald smith</a>
                      <a href="demo-digital-agency-blog-single-creative.html" className="card-title d-block fs-22 sm-fs-20 ls-minus-05px fw-500 text-dark-gray mb-0 w-90 lg-w-100">Good design obvious, great design is more transparent.
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="half-section pb-0">
        <div className="container-fluid">
          <div className="row position-relative">
            <div className="col swiper swiper-width-auto text-center pb-20px md-pb-20px" data-slider-options='{ "slidesPerView": "auto", "spaceBetween":40, "speed": 8000, "loop": true, "allowTouchMove": false, "autoplay": { "delay":0, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'>
              <div className="swiper-wrapper marquee-slide">
                <div className="swiper-slide">
                  <div className="fs-140 lg-fs-130 md-fs-110 sm-fs-90 text-dark-gray fw-600 ls-minus-6px alt-font">marketing.</div>
                </div>
                <div className="swiper-slide">
                  <div className="fs-140 lg-fs-130 md-fs-110 sm-fs-90 fw-600 text-outline text-outline-color-extra-medium-gray ls-minus-6px alt-font">analysis.</div>
                </div>
                <div className="swiper-slide">
                  <div className="fs-140 lg-fs-130 md-fs-110 sm-fs-90 text-dark-gray fw-600 ls-minus-6px alt-font">strategy.</div>
                </div>
                <div className="swiper-slide">
                  <div className="fs-140 lg-fs-130 md-fs-110 sm-fs-90 fw-600 text-outline text-outline-color-extra-medium-gray ls-minus-6px alt-font">business.</div>
                </div>
                <div className="swiper-slide">
                  <div className="fs-140 lg-fs-130 md-fs-110 sm-fs-90 text-dark-gray fw-600 ls-minus-6px alt-font">marketing.</div>
                </div>
                <div className="swiper-slide">
                  <div className="fs-140 lg-fs-130 md-fs-110 sm-fs-90 fw-600 text-outline text-outline-color-extra-medium-gray ls-minus-6px alt-font">analysis.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-3 col-lg-12 col-md-6 d-flex flex-column lg-mb-30px sm-mb-20px order-md-1">
              <a href="demo-digital-agency.html" className="footer-logo d-inline-block lg-mb-30px">
                <img src="images/demo-digital-agency-footer-logo.jpg" data-at2x="images/demo-digital-agency-footer-logo@2x.jpg" alt="" />
              </a>
              <div className="elements-social social-text-style-01 mt-auto">
                <ul className="small-icon dark fw-600">
                  <li><a className="facebook" href="https://www.facebook.com/" target="_blank">Fb.</a></li>
                  <li><a className="instagram" href="http://www.instagram.com" target="_blank">Ig.</a></li>
                  <li><a className="twitter" href="http://www.twitter.com" target="_blank">Tw.</a></li>
                  <li><a className="behance" href="http://www.behance.com/" target="_blank">Be.</a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-4 col-md-6 last-paragraph-no-margin order-lg-2 order-md-3 sm-mb-20px">
              <span className="fs-14 fw-600 d-block text-dark-gray text-dark-gray text-uppercase">Rotterdam</span>
              <p><strong className="text-dark-gray fw-600">Crafto digital media.</strong> <br />Graaf florisstraat 22A, Netherlands.</p>
              <span className="fs-14 fw-600 d-block text-dark-gray text-dark-gray text-uppercase">Barcelona</span>
              <p><strong className="text-dark-gray fw-600">Crafto digital media. </strong> <br />365 Grand via de coarts, Barcelona.</p>
            </div>
            <div className="col-12 col-xl-3 col-lg-4 col-md-6 last-paragraph-no-margin order-md-4 sm-mb-30px">
              <span className="fs-14 fw-600 d-block text-dark-gray text-dark-gray text-uppercase">Work inquiries</span>
              <p className="mb-0">Interested in working with us? </p>
              <a href="mailto:hello@yourdomain.com" className="text-dark-gray text-decoration-line-bottom fw-600 mb-50px sm-mb-30px d-inline-block">hello@yourdomain.com</a>
              <span className="fs-14 fw-600 d-block text-dark-gray text-dark-gray text-uppercase">Work with us</span>
              <p className="mb-0">Looking for a job opportunity?</p>
              <a href="mailto:hr@yourdomain.com" className="text-dark-gray text-decoration-line-bottom fw-600 d-inline-block">hr@yourdomain.com</a>
            </div>
            <div className="col-12 col-lg-3 col-xl-3 col-lg-4 col-md-6 order-lg-4 order-md-2 md-mb-30px sm-mb-0">
              <span className="fs-14 fw-600 d-block text-dark-gray mb-15px text-dark-gray text-uppercase">Sign up for the newsletter</span>
              <div className="d-inline-block w-100 newsletter-style-02 position-relative mb-10px">
                <form action="email-templates/subscribe-newsletter.php" method="post" className="position-relative w-100">
                  <input className="input-small border-color-extra-medium-gray w-100 form-control required" type="email" name="email" placeholder="Enter your email..." />
                  <input type="hidden" name="redirect" value="" />
                  <button type="submit" className="btn submit" aria-label="submit"><i className="icon bi bi-envelope icon-small text-dark-gray"></i></button>
                  <div className="form-results border-radius-4px pt-5px pb-5px ps-15px pe-15px fs-14 lh-22 mt-10px w-100 text-center position-absolute d-none"></div>
                </form>
              </div>
              <div className="d-flex align-items-center">
                <div className="d-inline-block fs-15"><i className="line-icon-Handshake me-10px align-middle icon-extra-medium"></i>Protecting your privacy</div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center pt-5 sm-pt-35px">
            <div className="col-12">
              <div className="divider-style-03 divider-style-03-01 border-color-extra-medium-gray"></div>
            </div>
            <div className="col-lg-5 pt-15px pb-15px md-pt-0 fs-15 order-2 order-lg-1 text-center text-lg-start last-paragraph-no-margin"><p>© 2024 Crafto is Proudly Powered by <a href="https://www.themezaa.com/" target="_blank" className="text-dark-gray fw-500 text-decoration-line-bottom">ThemeZaa</a></p></div>
            <div className="col-lg-7 pt-15px pb-15px md-pb-5px fs-15 order-1 order-lg-2 text-center text-lg-end">
              <ul className="footer-navbar sm-lh-normal">
                <li><a href="#" className="nav-link">Privacy policy</a></li>
                <li><a href="#" className="nav-link">Terms and conditions</a></li>
                <li><a href="#" className="nav-link">Copyright</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="scroll-progress d-none d-xxl-block">
        <a href="#" className="scroll-top" aria-label="scroll">
          <span className="scroll-text">Scroll</span><span className="scroll-line"><span className="scroll-point"></span></span>
        </a>
      </div>
    </div>
  );
}
