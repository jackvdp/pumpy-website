import caseStudies, { getSelectors } from "./caseStudies"

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
                {
                    getSelectors().map((selector, index) => (
                        <li key={index} className={`nav ${index == 0 && "active"}`}>
                            <a data-filter={selector.selector} href="#">{selector.tagName}</a>
                        </li>
                    ))
                }
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
                    {caseStudies.map((item, index) => (
                        <CaseStudy key={index} {...item} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

function CaseStudy(item) {
    return (
        <li key={item.id} className={`grid-item ${item.className} transition-inner-all`} data-atropos data-atropos-perspective="1450">
            <div className="position-relative">
                <a href={item.link} className="portfolio-link"></a>
                <div className="atropos-scale">
                    <div className="atropos-rotate">
                        <div className="atropos-inner" data-atropos-offset="3">
                            <div className={`portfolio-box ${item.bgClass}`}>
                                <div className="portfolio-image">
                                    <img src={item.imgSrc} alt="" />
                                </div>
                                <div className="portfolio-hover justify-content-end align-items-center d-flex flex-column pt-40px pb-40px sm-pt-30px sm-pb-30px">
                                    <span className="icon-box z-index-1 mb-auto ms-auto me-30px"><i className="bi bi-arrow-up-right icon-very-medium text-white" aria-hidden="true"></i></span>
                                    <div className="text-white fs-22 move-top-bottom-self"><span>{item.title}</span></div>
                                    <div className="fs-15 lh-28 text-white opacity-6 move-bottom-top-self"><span>{item.subtitle}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}