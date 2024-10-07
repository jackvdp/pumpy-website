"use client"

import Navbar from "@/components/navbar";
import { useEffect, useRef } from "react";

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

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
      <section className="p-0 full-screen ipad-top-space-margin position-relative overflow-hidden sm-h-auto">
        <div className="container-fluid p-0 h-100 position-relative">
          <div className="row h-100 g-0">
            <div className="col-12 col-md-6 bg-base-color bg-sliding-line d-flex justify-content-center flex-column p-10 position-relative xl-p-6 md-p-5 sm-ps-30px sm-pe-30px  sm-pt-50px sm-pb-50px order-2 order-md-1">
              <div className="vertical-title-center align-items-end w-75px sm-w-60px justify-content-center position-absolute pb-50px sm-pb-30px right-3px">
                <div className="title fs-16 text-dark-gray fw-700 text-uppercase ls-1px text-uppercase" data-fancy-text='{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ["Award winning agency"], "duration": 400, "delay": 0, "speed": 50, "easing": "easeOutQuad" }'></div>
              </div>
              <div className="separator-line h-120px w-2px bg-dark-gray position-absolute bottom-0px right-80px sm-right-60px"></div>
              <div className="fs-140 sm-fs-60 lh-95 fw-600 text-dark-gray mb-50px sm-mb-30px alt-font ls-minus-8px sm-ls-minus-2px" data-anime='{ "el": "childs", "translateX": [80, 0], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <div className="d-inline-block position-relative z-index-9">
                  <div className="highlight-separator mb-0" data-shadow-animation="true" data-animation-delay="1000">Digital<span><img src="images/demo-digital-agency-highlight-separator.png" alt="" /></span></div> agency
                </div>
              </div>
              <div className="fs-20 sm-fs-18 text-dark-gray mb-20px w-70 xxl-w-100 lg-w-100 sm-w-90 d-block" data-anime='{ "el": "childs", "translateX": [110, 0], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <span className="d-inline-block opacity-8">We create world-class digital products materials that communicate clearly.</span>
              </div>
              <div className="icon-with-text-style-08" data-anime='{ "el": "childs", "translateX": [140, 0], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="feature-box-icon feature-box-icon-rounded w-55px h-55px rounded-circle bg-dark-gray me-15px rounded-box">
                    <i className="feather icon-feather-arrow-right text-base-color icon-small"></i>
                  </div>
                  <div className="feature-box-content">
                    <a href="index.html" target="blank" className="d-inline-block fs-20 ls-minus-05px alt-font fw-600 text-dark-gray text-dark-gray-hover">Discover crafto</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 position-relative order-1 order-md-2">
              <div className="position-absolute left-0px bottom-0px bg-white z-index-9 p-65px md-p-40px w-360px d-none d-md-block">
                <div className="position-absolute right-30px top-30px">
                  <i className="feather icon-feather-arrow-up-right icon-extra-medium text-dark-gray"></i>
                </div>
                <div className="w-60" data-anime='{ "effect": "slide", "color": "#f6d63f", "direction":"lr", "easing": "easeOutQuad", "delay":50}'><img src="images/demo-digital-agency-01.png" alt="" /></div>
                <div className="fancy-text-style-3 mt-60px">
                  <h4 className="lh-40 alt-font text-dark-gray fw-600 ls-minus-2px image-mask cover-background mb-0" style={{ backgroundImage: "url('https://via.placeholder.com/300x300')" }}>World-class digital media agency.</h4>
                </div>
              </div>
              <div className="swiper h-100 banner-slider sm-h-450px swiper-light-pagination" data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-pagination-bullets", "clickable": true }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 4000, "stopOnLastSlide": true, "disableOnInteraction": false },"keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "fade" }'>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="position-absolute left-0px top-0px w-100 h-100 cover-background"
                      style={{ backgroundImage: "url('https://via.placeholder.com/960x1125')" }}></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-absolute left-0px top-0px w-100 h-100 cover-background"
                      style={{ backgroundImage: "url('https://via.placeholder.com/960x1125')" }}></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-absolute left-0px top-0px w-100 h-100 cover-background"
                      style={{ backgroundImage: "url('https://via.placeholder.com/960x1125')" }}></div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-absolute left-0px top-0px w-100 h-100 cover-background" style={{ backgroundImage: "url('https://via.placeholder.com/960x1125')" }}></div>
                  </div>
                </div>
                <div className="slider-one-slide-prev-1 icon-very-small text-white swiper-button-prev slider-navigation-style-06 d-none d-sm-inline-block"><i className="line-icon-Arrow-OutLeft icon-extra-large"></i></div>
                <div className="slider-one-slide-next-1 icon-very-small text-white swiper-button-next slider-navigation-style-06 d-none d-sm-inline-block"><i className="line-icon-Arrow-OutRight icon-extra-large"></i></div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-0">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 clients-style-06 justify-content-center" data-anime='{ "el": "childs", "translateY": [-15, 0], "scale": [1.1, 1], "opacity": [0,1], "duration": 500, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="col client-box text-center md-mb-40px">
              <a href="#"><img src="images/logo-walmart-dark-gray.svg" className="h-35px" alt="" /></a>
            </div>
            <div className="col client-box text-center md-mb-40px">
              <a href="#"><img src="images/logo-invision-dark-gray.svg" className="h-40px" alt="" /></a>
            </div>
            <div className="col client-box text-center md-mb-40px">
              <a href="#"><img src="images/logo-netflix-dark-gray.svg" className="h-35px" alt="" /></a>
            </div>
            <div className="col client-box text-center sm-mb-40px">
              <a href="#"><img src="images/logo-logitech-dark-gray.svg" className="h-35px" alt="" /></a>
            </div>
            <div className="col client-box text-center">
              <a href="#"><img src="images/logo-amazon-dark-gray.svg" className="h-35px" alt="" /></a>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="container">
          <div className="row align-items-center mb-6 sm-mb-50px">
            <div className="col-xl-5 col-lg-5 md-mb-50px sm-mb-30px text-center text-md-start">
              <h2 className="text-dark-gray fw-600 ls-minus-3px mb-0 alt-font highlight-separator-small">We are a creative bold digital agency based in <span className="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">london.<span><img src="images/demo-digital-agency-highlight-separator.png" alt="" /></span></span></h2>
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
                              <span className="fs-110 text-white alt-font fw-700 d-flex ls-minus-4px w-100 justify-content-center">20
                                <sub className="align-top fs-40 fw-500 position-relative top-0px">+</sub>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-7 text-center text-md-start" data-anime='{ "el": "childs", "translateY": [-15, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
                  <span className="fs-16 text-uppercase ls-05px text-dark-gray fw-700 d-block mb-5px">20+ years of experience</span>
                  <p className="fs-18 lh-32">We are dedicated to providing outstanding digital and design services meet the functional and aesthetic.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 justify-content-center" data-anime='{ "el": "childs", "translateY": [30, 0], "translateX": [30, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="col icon-with-text-style-01 pe-5 md-mb-30px">
              <div className="separator-line-1px bg-extra-medium-gray w-100 mb-30px d-none d-lg-block"></div>
              <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                <div className="feature-box-content">
                  <span className="fs-18 w-80 sm-w-90 d-block"><span className="fw-700 text-dark-gray ls-minus-1px">350+</span> very satisfied clients around the worldwide.</span>
                </div>
                <div className="feature-box-icon me-0 mt-5px md-mt-0">
                  <i className="bi bi-emoji-smile text-dark-gray icon-medium"></i>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-01 pe-5 md-mb-30px">
              <div className="separator-line-1px bg-extra-medium-gray w-100 mb-30px d-none d-lg-block"></div>
              <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                <div className="feature-box-content">
                  <span className="fs-18 w-80 sm-w-90 d-block"><span className="fw-700 text-dark-gray ls-minus-1px">200+</span> good award winning digital media agency.</span>
                </div>
                <div className="feature-box-icon me-0 mt-5px md-mt-0">
                  <i className="bi bi-megaphone text-dark-gray icon-medium"></i>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-01 pe-5 md-mb-30px sm-mb-0">
              <div className="separator-line-1px bg-extra-medium-gray w-100 mb-30px d-none d-lg-block"></div>
              <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                <div className="feature-box-content">
                  <span className="fs-18 w-80 sm-w-90 d-block"><span className="fw-700 text-dark-gray ls-minus-1px">750+</span> successfully project completed in one year.</span>
                </div>
                <div className="feature-box-icon me-0 mt-5px md-mt-0">
                  <i className="bi bi-briefcase text-dark-gray icon-medium"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-nero-gray big-section">
        <div className="container">
          <div className="row mb-7 sm-mb-50px">
            <div className="col-12 col-xl-9 col-lg-12">
              <h2 className="text-white fw-500 ls-minus-2px mb-0 alt-font" data-fancy-text='{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ["It&#39;s so challenging to find a good team to do great things. But we can provide you the best one."], "duration": 400, "delay": 0, "speed": 20, "easing": "easeOutQuad" }'></h2>
            </div>
          </div>
          <div className="row mb-6 sm-mb-30px">
            <div className="col-12" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
              <div className="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-dark-gray position-relative">
                <div className="col-md-1 text-start text-md-center sm-mb-20px">
                  <span className="fs-18 alt-font text-white">01</span>
                </div>
                <div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
                  <i className="line-icon-Vector-5 text-base-color icon-large me-20px"></i>
                  <span className="text-white fw-500 fs-30 alt-font">Design</span>
                </div>
                <div className="col-md-5 last-paragraph-no-margin">
                  <p>We strive to develop real-world web solutions that are ideal for small to large projects with project requirements. </p>
                </div>
              </div>
              <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-dark-gray position-relative">
                <div className="col-md-1 text-start text-md-center sm-mb-20px">
                  <span className="fs-18 alt-font text-white">02</span>
                </div>
                <div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px flex-wrap">
                  <i className="line-icon-Laptop-Secure text-base-color icon-large me-20px"></i>
                  <span className="text-white fw-500 fs-30 alt-font me-15px">Development</span>
                  <span className="ps-15px pe-15px md-mt-10px md-mb-10px border-radius-100px text-uppercase bg-yellow text-dark-gray fs-12 lh-28 fw-700">Popular</span>
                </div>
                <div className="col-md-5 last-paragraph-no-margin">
                  <p>We strive to develop real-world web solutions that are ideal for small to large projects with project requirements. </p>
                </div>
              </div>
              <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-dark-gray position-relative">
                <div className="col-md-1 text-start text-md-center sm-mb-20px">
                  <span className="fs-18 alt-font text-white">03</span>
                </div>
                <div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
                  <i className="line-icon-Archery-2 text-base-color icon-large me-20px"></i>
                  <span className="text-white fw-500 fs-30 alt-font">Marketing</span>
                </div>
                <div className="col-md-5 last-paragraph-no-margin">
                  <p>We strive to develop real-world web solutions that are ideal for small to large projects with project requirements. </p>
                </div>
              </div>
              <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-dark-gray position-relative">
                <div className="col-md-1 text-start text-md-center sm-mb-20px">
                  <span className="fs-18 alt-font text-white">04</span>
                </div>
                <div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
                  <i className="line-icon-Management text-base-color icon-large me-20px"></i>
                  <span className="text-white fw-500 fs-30 alt-font">Content writing</span>
                </div>
                <div className="col-md-5 last-paragraph-no-margin">
                  <p>We strive to develop real-world web solutions that are ideal for small to large projects with project requirements. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-10 text-center" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
              <div className="text-white fs-20">Save your precious time and effort spent for finding a solution. <a href="demo-digital-agency-contact.html" className="text-base-color text-decoration-line-bottom">Contact us now</a></div>
            </div>
          </div>
        </div>
      </section>
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
