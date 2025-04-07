"use client";

import React from 'react';
import {useForm, ValidationError} from '@formspree/react';
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";

export default function ContactForm() {
    const {executeRecaptcha} = useGoogleReCaptcha();
    const [state, handleSubmit] = useForm("mzzbzqjz", {
        data: {"g-recaptcha-response": executeRecaptcha}
    });

    if (state.succeeded) {
        return <p>Thanks for your message! We&#39;ll be in touch shortly</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="position-relative form-group mb-20px">
                <input
                    className="ps-0 border-radius-0px medium-gray bg-transparent border-color-light-red form-control required"
                    type="text"
                    name="name"
                    placeholder="Enter your name*"
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
            </div>
            <div className="position-relative form-group mb-20px">
                <input
                    className="ps-0 border-radius-0px medium-gray bg-transparent border-color-light-red form-control required"
                    type="email"
                    name="email"
                    placeholder="Enter your email*"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="position-relative z-index-1 form-group form-textarea mt-15px mb-0">
        <textarea
            className="ps-0 border-radius-0px medium-gray bg-transparent border-color-light-red form-control"
            name="comment"
            placeholder="Enter your message"
            rows="3"
        />
                <ValidationError
                    prefix="Comment"
                    field="comment"
                    errors={state.errors}
                />
                <button
                    className="btn btn-medium btn-dark-gray btn-round-edge btn-box-shadow mb-20px mt-25px w-100"
                    type="submit"
                    disabled={state.submitting}
                >
                    Send message<i className="fa-regular fa-envelope"></i>
                </button>
                <div className="form-results mt-20px d-none"></div>
            </div>
        </form>
    );
}
