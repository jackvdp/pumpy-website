"use client"

import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import loadScript from "@/utils/loadScript";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import About from "@/components/About";
import HowItWorks from "@/components/Process";
import ScrollIndicator from "@/components/ScrollIndicator";
import CaseStudies from "@/components/CaseStudies";
import Parallax from "@/components/Parallax";
import Facts from "@/components/Facts";

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
      <CaseStudies />
      <Parallax />
      <Facts />
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
      <ScrollIndicator />
    </div>
  );
}
