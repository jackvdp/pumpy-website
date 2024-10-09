export default function CaseStudies() {
    return (
        <section className="pb-0 overflow-hidden position-relative">
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-xl-5 lg-mb-30px text-center text-xl-start">
                        <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mb-0">Case studies</h2>
                    </div>
                    <SelectionTabs />
                </div>
                <Icons />
            </div>
        </section>
    )
}

function SelectionTabs() {
    return (
        <div className="col-xl-7 tab-style-04 text-center text-xl-end">
            <ul className="portfolio-filter nav nav-tabs justify-content-center justify-content-xl-end border-0">
                <li className="nav active"><a data-filter="*" href="#">All</a></li>
                <li className="nav"><a data-filter=".selected" href="#">Selected</a></li>
                <li className="nav"><a data-filter=".digital" href="#">Digital</a></li>
                <li className="nav"><a data-filter=".branding" href="#">Branding</a></li>
                <li className="nav"><a data-filter=".web" href="#">Web</a></li>
            </ul>
        </div>
    )
}

function Icons() {
    return (
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
    )
}