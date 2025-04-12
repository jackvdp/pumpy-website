import Image from "next/image"

export default function CaseStudy(item) {
    return (
        <li key={item.id} className={`grid-item ${item.className} transition-inner-all`} data-atropos
            data-atropos-perspective="1450">
            <div className="position-relative">
                <a href={"/projects/" + item.id} target="_blank" className="portfolio-link"></a>
                <div className="atropos-scale">
                    <div className="atropos-rotate">
                        <div className="atropos-inner" data-atropos-offset="3">
                            <div className={`portfolio-box bg-pumpy-orange foo`}>
                                <div className="portfolio-image">
                                    <Image width={720} height={470} src={item.imgSrc} alt=""/>
                                </div>
                                <div
                                    className="portfolio-hover justify-content-end align-items-center d-flex flex-column pt-40px pb-40px sm-pt-30px sm-pb-30px">
                                    <span className="icon-box z-index-1 mb-auto ms-auto me-30px"><i
                                        className="bi bi-arrow-up-right icon-very-medium text-white"
                                        aria-hidden="true"></i></span>
                                    <div className="text-white fs-22 move-top-bottom-self"><span>{item.title}</span>
                                    </div>
                                    <div className="fs-15 lh-28 text-white opacity-6 move-bottom-top-self">
                                        <span>{item.subtitle}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </li>
    )
}