export default function Footer() {
    return (
        <footer className="pb-0 bg-base-color bg-sliding-line footer-sticky" style={{zIndex: "0"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-3 col-lg-12 col-md-6 d-flex flex-column lg-mb-30px sm-mb-20px order-md-1">
                        <a href="/" className="footer-logo d-inline-block lg-mb-30px">
                        <img src="imagesNew/logo.png" alt="" className="default-logo" />
                        </a>
                        <div className="elements-social social-text-style-01 mt-auto">
                            <ul className="small-icon dark fw-600">
                                <li><a className="twitter" href="https://x.com/JackVanderpump" target="_blank">Tw.</a></li>
                                <li><a className="linkedin" href="https://www.linkedin.com/in/jack-vanderpump-3421a3105/" target="_blank">Li.</a></li>
                                <li><a className="github" href="https://www.github.com/jackvdp" target="_blank">Gi.</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-4 col-md-6 last-paragraph-no-margin order-lg-2 order-md-3 sm-mb-20px">
                        <span className="fs-14 fw-600 d-block text-dark-gray text-dark-gray text-uppercase">Quick Links</span>
                        <a href="/">About</a><br/>
                        <a href="/">Services</a><br/>
                        <a href="/">Case Studies</a><br/>
                        <a href="/">Music</a><br/>
                        <a href="/">Contact</a>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-4 col-md-6 last-paragraph-no-margin order-md-4 sm-mb-30px">
                        <span className="fs-14 fw-600 d-block text-dark-gray text-dark-gray text-uppercase">Contact</span>
                        <a href="mailto:jack@vanderpump.tech" className="text-dark-gray text-decoration-line-bottom fw-600 mb-50px sm-mb-30px d-inline-block">jack@vanderpump.tech</a>
                    </div>
                    <div className="col-12 col-lg-3 col-xl-3 col-lg-4 col-md-6 order-lg-4 order-md-2 md-mb-30px sm-mb-0">
                        <span className="fs-14 fw-600 d-block text-dark-gray mb-15px text-dark-gray text-uppercase">Get in touch</span>
                        <div className="d-inline-block w-100 newsletter-style-02 position-relative mb-10px">
                            <form action="email-templates/subscribe-newsletter.php" method="post" className="position-relative w-100">
                                <input className="input-small border-color-extra-medium-gray w-100 form-control required" type="email" name="email" placeholder="Enter your email..." />
                                <input type="hidden" name="redirect" value="" />
                                <button type="submit" className="btn submit" aria-label="submit"><i className="icon bi bi-envelope icon-small text-dark-gray"></i></button>
                                <div className="form-results border-radius-4px pt-5px pb-5px ps-15px pe-15px fs-14 lh-22 mt-10px w-100 text-center position-absolute d-none"></div>
                            </form>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-inline-block fs-15"><i className="line-icon-Handshake me-10px align-middle icon-extra-medium"></i>Let&apos;s work together</div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center pt-5 sm-pt-35px">
                    <div className="col-12">
                        <div className="divider-style-03 divider-style-03-01 border-color-dark-gray"></div>
                    </div>
                    <div className="col-lg-5 pt-15px pb-15px md-pt-0 fs-15 order-2 order-lg-1 text-center text-lg-start last-paragraph-no-margin"><p>© {new Date().getFullYear().toString()} Vanderpump Tech</p></div>
                    <div className="col-lg-7 pt-15px pb-15px md-pb-5px fs-15 order-1 order-lg-2 text-center text-lg-end"></div>
                </div>
            </div>
        </footer>
    )
}