import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainWrapper from "@/components/MainWrapper";
import Marquee from "@/components/Marquee";
import caseStudiesDetails from "@/components/CaseStudies/caseStudiesDetails";

export async function generateStaticParams() {
    return caseStudiesDetails.map((study) => ({
        id: study.id.toString(),
    }));
}

export default function ProjectPage({params}) {
    const projectData = caseStudiesDetails.find(
        (study) => study.id.toString() === params.id
    )

    return (
        <>
            <MainWrapper>
                <Navbar/>

                <section className="cover-background pt-11 lg-pt-15 md-pt-5 ipad-top-space-margin">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-12 col-lg-5 col-md-6 sm-mb-40px sm-mt-30px text-center text-md-start">
                                <span
                                    className="alt-font fs-90 lh-80 d-block text-dark-gray fw-700 ls-minus-3px mb-15px w-80 lg-w-100">
                                    {projectData.title}
                                </span>
                                <p className="w-75 lg-w-100">{projectData.description}</p>
                                <a href={"https://" + projectData.website} target="_blank" rel="noopener noreferrer"
                                   className="btn btn-dark-gray btn-large btn-switch-text btn-box-shadow">
                                    <span>
                                        <span
                                            className="btn-double-text"
                                            data-text={projectData.website}>{projectData.website}
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="col-12 col-lg-7 col-md-6">
                                <img className="border-radius-8px" src={projectData.images.header} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ps-8 pe-8 xxl-ps-4 xxl-pe-4 xl-ps-2 xl-pe-2 sm-px-0 py-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <img src={projectData.images.fullWidth1} className="w-100 border-radius-8px" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div
                                className="col-lg-5 col-md-6 text-center text-md-start last-paragraph-no-margin sm-mb-30px">
                                <h5 className="alt-font fw-600 text-dark-gray mb-15px ls-minus-1px">
                                    The project description
                                </h5>
                                <p>{projectData.projectDetails.description}</p>
                            </div>
                            <div className="col-lg-5 col-md-6 offset-lg-1">
                                <div className="row row-cols-2 align-items-center text-center text-md-start">
                                    <div className="col mb-30px">
                                        <span className="lh-20 d-block">Technology</span>
                                        <span
                                            className="alt-font fw-500 text-dark-gray">{projectData.projectDetails.technology}</span>
                                    </div>
                                    <div className="col mb-30px">
                                        <span className="lh-20 d-block">Services</span>
                                        <span
                                            className="alt-font fw-500 text-dark-gray">{projectData.projectDetails.services}</span>
                                    </div>
                                    <div className="col">
                                        <span className="lh-20 d-block">Industry</span>
                                        <span
                                            className="alt-font fw-500 text-dark-gray">{projectData.projectDetails.industry}</span>
                                    </div>
                                    <div className="col">
                                        <span className="lh-20 d-block">Client</span>
                                        <span
                                            className="alt-font fw-500 text-dark-gray">{projectData.projectDetails.client}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ps-8 pe-8 xxl-ps-4 xxl-pe-4 xl-ps-2 xl-pe-2 sm-px-0 py-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <img src={projectData.images.fullWidth2} className="w-100 border-radius-8px" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row text-center text-md-start">
                            <div className="col-12 col-md-6 sm-mb-30px">
                                <span className="alt-font fs-24 text-dark-gray w-80 lg-w-90 md-w-100 d-inline-block">
                                    {projectData.quotes[0].isHighlighted ? (
                                        <>
                                            <span className="text-decoration-line-bottom fw-600">
                                                {projectData.quotes[0].highlight}
                                            </span>
                                            {projectData.quotes[0].text.substring(projectData.quotes[0].highlight.length)}
                                        </>
                                    ) : (
                                        projectData.quotes[0].text
                                    )}
                                </span>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="w-80 lg-w-90 md-w-100 mb-0">
                                    {projectData.quotes[1].text}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ps-8 pe-8 xxl-ps-4 xxl-pe-4 xl-ps-2 xl-pe-2 sm-px-0 py-0">
                    <div className="container-fluid">
                        <div className="row mb-30px">
                            <div className="col-sm-6 xs-mb-30px">
                                <img className="w-100 border-radius-8px" src={projectData.images.sideBySide1} alt=""/>
                            </div>
                            <div className="col-sm-6">
                                <img className="w-100 border-radius-8px" src={projectData.images.sideBySide2} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <Marquee/>
            </MainWrapper>
            <Footer/>
        </>
    );
}