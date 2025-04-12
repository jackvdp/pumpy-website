import caseStudies from "./caseStudies"
import getSelectors from "./getSelectors"
import CaseStudy from "./CaseStudy"

export default function CaseStudies({showTitle = true}) {
    return (
        <section className="pb-0 overflow-hidden position-relative bg-white">
            <div className="container">
                <div className="row align-items-center mb-5">
                    {showTitle && (
                        <div className="col-xl-5 lg-mb-30px text-center text-xl-start">
                            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mb-0">Case studies</h2>
                        </div>
                    )}
                    <SelectionTabs showTitle={showTitle}/>
                </div>
                <Icons/>
            </div>
        </section>
    )
}

function SelectionTabs({showTitle}) {
    return (
        <div className={`${showTitle && "col-xl-7 text-xl-end"} tab-style-04 text-center`}>
            <ul className={`portfolio-filter nav nav-tabs justify-content-center ${showTitle && "justify-content-xl-end"} border-0`}>
                {
                    getSelectors().map((selector, index) => (
                        <li key={index} className={`nav ${index === 0 && "active"}`}>
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