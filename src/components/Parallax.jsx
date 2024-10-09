export default function Parallax() {
    return (
        <section className="big-section" data-parallax-background-ratio="0.5" style={{ backgroundImage: "url(/imagesNew/codebg.png)" }}>
            <div className="container">
                <div className="row mt-10 mb-10">
                    <div className="col-12 col-xxl-7 col-xl-8">
                        <h2 className="text-dark-gray text-white alt-font fw-500 ls-minus-2px w-95 md-w-100" data-fancy-text='{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ["Forward thinking team of designers, copywriters and developers."], "duration": 400, "delay": 0, "speed": 20, "easing": "easeOutQuad" }'></h2>
                    </div>
                </div>
            </div>
        </section>
    )
}