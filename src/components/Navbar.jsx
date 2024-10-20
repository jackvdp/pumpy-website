export default function Navbar() {
    const navItems = [
        { href: "/about", text: "About" },
        { href: "/services", text: "Services" },
        { href: "/casestudies", text: "Case Studies" },
        { href: "/music", text: "Music" },
        { href: "/contact", text: "Contact" }
    ];

    return (
        <header>
            <nav className="navbar navbar-expand-lg header-light bg-transparent header-transparent header-reverse-back-scroll glass-effect" data-header-hover="light">
                <div className="container-fluid">
                    <div className="col-auto">
                        <a className="navbar-brand" href="/">
                            <img src="imagesNew/logo.png" alt="" className="default-logo" />
                            <img src="imagesNew/logo.png" alt="" className="alt-logo" />
                            <img src="imagesNew/logo.png" alt="" className="mobile-logo" />
                        </a>
                    </div>
                    <div className="col-auto menu-order">
                        <button className="navbar-toggler float-start" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav alt-font">
                                {navItems.map((item, index) => (
                                    <li className="nav-item" key={index}>
                                        <a href={item.href} className="nav-link">
                                            <div className="nav-item-underline">{item.text}</div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto ms-auto d-none d-lg-flex">
                        <div className="header-icon">
                            <div className="header-button ms-25px">
                                <div className="btn border-1 btn-transparent-pink-light btn-large left-icon btn-switch-text">
                                    <span>
                                        <span><i className="fa-regular fa-envelope"></i></span>
                                        <span className="btn-double-text" data-text="Let's talk!">Let&apos;s talk!</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}