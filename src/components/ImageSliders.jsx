"use client"
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function ImagesSlider() {
    return (
        <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            className="h-100 banner-slider sm-h-450px"
            slidesPerView={1}
            effect="fade"
            loop={true}
            speed={300}
            navigation={{
                nextEl: '.slider-one-slide-next-1',
                prevEl: '.slider-one-slide-prev-1',
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }}
        >
            <SwiperSlide>
                <Image
                    priority
                    fill
                    className="position-absolute left-0px top-0px w-100 h-100 object-cover"
                    src='/imagesNew/hero/hero2.webp'
                    loading={"eager"}
                    alt="code"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    fill
                    className="position-absolute left-0px top-0px w-100 h-100 object-cover"
                    src='/imagesNew/hero/hero3.webp'
                    alt="code"
                    loading={"lazy"}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    fill
                    className="position-absolute left-0px top-0px w-100 h-100 object-cover"
                    src='/imagesNew/hero/hero5.png'
                    alt="code"
                    loading={"lazy"}
                />
            </SwiperSlide>

            <div
                className="slider-one-slide-prev-1 icon-very-small text-white swiper-button-prev slider-navigation-style-06 d-none d-sm-inline-block">
                <i className="line-icon-Arrow-OutLeft icon-extra-large"></i>
            </div>
            <div
                className="slider-one-slide-next-1 icon-very-small text-white swiper-button-next slider-navigation-style-06 d-none d-sm-inline-block">
                <i className="line-icon-Arrow-OutRight icon-extra-large"></i>
            </div>
        </Swiper>
    );
}