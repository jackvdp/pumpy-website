export default function HowItWorks() {
    return (
        <section className="bg-nero-gray big-section">
            <div className="container">
                <div className="row mb-7 sm-mb-50px">
                    <div className="col-12 col-xl-9 col-lg-12">
                        <h2 className="text-white fw-500 ls-minus-2px mb-0 alt-font" data-fancy-text='{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ["Your vision, digitally realised: the personalized choice."], "duration": 400, "delay": 0, "speed": 20, "easing": "easeOutQuad" }'></h2>
                    </div>
                </div>
                <Steps />
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-10 text-center" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <div className="text-white fs-20">Let's build your project together. <a href="/contact" className="text-base-color text-decoration-line-bottom">Get in touch.</a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Steps() {
    const steps = [
        { number: "01", icon: "line-icon-Search-People", title: "Discover", description: "I work closely with you to understand your unique vision and goals. Through thoughtful discussion and analysis, I ensure your project aligns perfectly with your objectives." },
        { number: "02", icon: "line-icon-Pen-5", title: "Design", description: "Using my expertise in UX/UI principles, I transform your ideas into visually striking and intuitive designs. Every interface is crafted to be both appealing and user-friendly." },
        { number: "03", icon: "line-icon-Code-Window", title: "Develop", description: "I bring your design to life using cutting-edge technologies and best coding practices. Throughout the process, I maintain open communication to ensure your vision is realized." },
        { number: "04", icon: "line-icon-Rocket", title: "Deploy", description: "I carefully launch your project, ensuring a smooth transition to the live environment. I provide ongoing support and maintenance to keep your digital presence running flawlessly." }
    ];

    return (
        <div className="row mb-6 sm-mb-30px">
            <div className="col-12" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                {steps.map((step, index) => (
                    <div key={index} className={`row align-items-center pt-40px g-0 pb-40px ${index !== steps.length - 1 ? 'border-bottom' : ''} border-color-dark-gray position-relative`}>
                        <div className="col-md-1 text-start text-md-center sm-mb-20px">
                            <span className="fs-18 alt-font text-white">{step.number}</span>
                        </div>
                        <div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px flex-wrap">
                            <i className={`${step.icon} text-base-color icon-large me-20px`}></i>
                            <span className="text-white fw-500 fs-30 alt-font me-15px">{step.title}</span>
                        </div>
                        <div className="col-md-5 last-paragraph-no-margin">
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}