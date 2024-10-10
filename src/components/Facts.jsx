export default function Facts() {
    return (
        <section>
            <div className="container">
                <div className="row mb-3 sm-mb-0">
                    <div className="col-12 col-xxl-9 col-xl-10">
                        <h2 className="text-dark-gray fw-600 alt-font ls-minus-3px w-95 md-w-100 highlight-separator-small">Combining technical knowledge with user-centric design to deliver websites and apps that <span className="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500"> engage <span><img src="imagesNew/highlight-separator.png" alt="" /></span></span> and convert.</h2>
                    </div>
                </div>
                <div className="row mb-3 md-mb-0">
                    <div className="col-12 col-lg-4 col-md-8 md-mb-50px">
                        <div className="position-sticky top-120px" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                            <p className="w-75 lg-w-100 mb-40px">Dedicated to providing personalized solutions tailored to your <span className="text-dark-gray text-decoration-line-bottom fw-600">unique business needs and goals.</span></p>
                            <a href="/contact" className="btn btn-large btn-dark-gray btn-box-shadow">Let's talk now<i className="fa-regular fa-envelope"></i></a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-md-12">
                        <Quad />
                    </div>
                </div>
            </div>
        </section>
    )
}

const data = [
    {
        text: "Hours dedicated to web development.",
        value: 10,
        unit: "k",
    },
    {
        text: "Commits pushed to GitHub repositories.",
        value: 5000,
        unit: "+",
    },
    {
        text: "Lines of clean, efficient code written.",
        value: 250,
        unit: "k",
    },
    {
        text: "Average website boost for clients.",
        value: 40,
        unit: "%",
    },
];

function Quad() {
    return (
        <div className="row g-0 counter-style-04" data-anime='{ "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`col-12 col-md-6 border-start ${index < 2 ? 'border-bottom' : ''} ${index % 2 === 1 ? 'border-end' : ''} border-color-extra-medium-gray ps-60px pe-60px lg-ps-40px lg-pe-40px lg-pt-30px pt-40px pb-30px`}
                >
                    <p className="fs-19 text-dark-gray mb-30 fw-500 w-85 sm-mb-15">{item.text}</p>
                    <h2 className="alt-font vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px mt-20 sm-mb-0" data-text={item.unit} data-to={item.value}>
                        <sup className="top-0">
                            <i className="feather icon-feather-arrow-up icon-very-medium text-dark-gray"></i>
                        </sup>
                    </h2>
                </div>
            ))}
        </div>
    );
}