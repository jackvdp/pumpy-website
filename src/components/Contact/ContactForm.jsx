export default function ContactForm() {
    return <form action="https://formspree.io/f/mzzbzqjz" method="post">
        <div className="position-relative form-group mb-20px">
            <input
                className="ps-0 border-radius-0px medium-gray bg-transparent border-color-light-red form-control required"
                type="text"
                name="name"
                placeholder="Enter your name*"
            />
        </div>
        <div className="position-relative form-group mb-20px">
            <input
                className="ps-0 border-radius-0px medium-gray bg-transparent border-color-light-red form-control required"
                type="email"
                name="email"
                placeholder="Enter your email*"
            />
        </div>
        <div className="position-relative z-index-1 form-group form-textarea mt-15px mb-0">
            <textarea
                className="ps-0 border-radius-0px medium-gray bg-transparent border-color-light-red form-control"
                name="comment"
                placeholder="Enter your message"
                rows="3"
            />
            <input type="hidden" name="redirect" value=""/>
            <button
                className="btn btn-medium btn-dark-gray btn-round-edge btn-box-shadow mb-20px mt-25px submit w-100"
                type="submit">Send message<i className="fa-regular fa-envelope"></i>
            </button>
            <div className="form-results mt-20px d-none"></div>
        </div>
    </form>;
}
