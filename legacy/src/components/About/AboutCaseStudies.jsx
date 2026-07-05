export default function AboutCaseStudies() {
    return <section className="pb-0">
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 transition-inner-all">
                <div className="col team-style-08 md-mb-30px"
                     data-bottom-top="transform:scale(0.8, 0.8) translateY(-30px);"
                     data-top-bottom="transform:scale(0.7, 0.7) translateY(30px);">
                    <figure className="mb-0 position-relative overflow-hidden">
                        <img src="/imagesNew/casestudies/zopa.png" alt=""/>
                        <figcaption
                            className="w-100 h-100 d-flex align-items-end p-13 lg-p-8 md-p-13 sm-p-9 bg-gradient-gray-light-dark-transparent">
                            <div className="w-100">
                                        <span
                                            className="team-member-name fs-19 fw-500 text-white d-block">Zopa Bank</span>
                                <span
                                    className="member-designation fs-16 lh-26 text-white d-block">Fintech</span>
                            </div>
                            <div className="social-icon d-flex flex-column flex-shrink-1">
                                <a href="/projects"
                                   className="text-black w-55px h-55px"><i
                                    className="fa-solid fa-piggy-bank icon-small"></i></a>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="col team-style-08 mt-2 md-mt-0 md-mb-30px"
                     data-bottom-top="transform:scale(1, 1)" data-top-bottom="transform:scale(1, 1)">
                    <figure className="mb-0 position-relative overflow-hidden">
                        <img src="/imagesNew/casestudies/pumpy.png" alt=""/>
                        <figcaption
                            className="w-100 h-100 d-flex align-items-end p-13 lg-p-8 md-p-13 sm-p-9 bg-gradient-gray-light-dark-transparent">
                            <div className="w-100">
                                        <span
                                            className="team-member-name fs-19 fw-500 text-white d-block">Pumpy</span>
                                <span
                                    className="member-designation fs-16 lh-26 text-white d-block">Music</span>
                            </div>
                            <div className="social-icon d-flex flex-column flex-shrink-1">
                                <a href="/music"
                                   className="text-black w-55px h-55px"><i
                                    className="fa-solid fa-music icon-small"></i></a>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="col team-style-08"
                     data-bottom-top="transform:scale(0.8, 0.8) translateY(-30px);"
                     data-top-bottom="transform:scale(0.7, 0.7) translateY(30px);">
                    <figure className="mb-0 position-relative overflow-hidden">
                        <img src="/imagesNew/casestudies/met.png" alt=""/>
                        <figcaption
                            className="w-100 h-100 d-flex align-items-end p-13 lg-p-8 md-p-13 sm-p-9 bg-gradient-gray-light-dark-transparent">
                            <div className="w-100">
                                <span className="team-member-name fs-19 fw-500 text-white d-block">Met Office</span>
                                <span
                                    className="member-designation fs-16 lh-26 text-white d-block">Public Service</span>
                            </div>
                            <div className="social-icon d-flex flex-column flex-shrink-1">
                                <a href="/projects" target="_blank"
                                   className="text-black w-55px h-55px"><i
                                    className="fa-solid fa-cloud icon-small"></i></a>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </section>;
}
