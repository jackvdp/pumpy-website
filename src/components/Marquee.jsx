"use client"

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';

export default function Marquee() {
    const words = [
        {text: "design.", outline: false},
        {text: "marketing.", outline: true},
        {text: "development.", outline: false},
        {text: "analytics.", outline: true},
        {text: "tailored.", outline: false},
        {text: "cost-effective.", outline: true},
    ];

    return (
        <section className="half-section pb-0 bg-white">
            <div className="container-fluid">
                <div className="row position-relative">
                    <div className="col text-center pb-20px md-pb-20px">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView="auto"
                            spaceBetween={40}
                            speed={8000}
                            loop={true}
                            allowTouchMove={false}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            className="swiper-width-auto"
                        >
                            {words.map((word, index) => (
                                <SwiperSlide key={index} style={{width: 'auto'}}>
                                    <div className={`fs-140 lg-fs-130 md-fs-110 sm-fs-90 fw-600 ls-minus-6px alt-font ${
                                        word.outline 
                                            ? 'text-outline text-outline-color-extra-medium-gray' 
                                            : 'text-dark-gray'
                                    }`}>
                                        {word.text}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
