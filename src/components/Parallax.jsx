export default function Parallax() {
    const text = '["Creating tailored, cost-effective digital solutions for your vision."]'

    return (
        <section className="big-section" data-parallax-background-ratio="0.5" style={{ backgroundImage: "url(/imagesNew/codebg.webp)" }}>
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-xxl-7 col-xl-8">
                        <h2
                            className="text-dark-gray text-white alt-font fw-500 ls-minus-2px w-95 md-w-100"
                            data-fancy-text=
                            {`{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ${text}, "duration": 400, "delay": 0, "speed": 20, "easing": "easeOutQuad" }`}
                        />
                        <a href="/contact" className="btn btn-large btn-gradient-pink-orange d-table d-lg-inline-block xl-mb-15px md-mx-auto">Get in touch!</a>
                    </div>
                </div>
            </div>
        </section>
    )
}