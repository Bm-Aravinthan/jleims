import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ImageSlider.css';
import {images} from '../../constants/index';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// import slide_image_1 from './assets/images/img_1.jpg';
// import slide_image_2 from './assets/images/img_2.jpg';
// import slide_image_3 from './assets/images/img_3.jpg';
// import slide_image_4 from './assets/images/img_4.jpg';
// import slide_image_5 from './assets/images/img_5.jpg';
// import slide_image_6 from './assets/images/img_6.jpg';
// import slide_image_7 from './assets/images/img_7.jpg';

function ImageSlider() {
  return (
    <div className="container">
      <div className="heading">Welcome to our church</div>
      <div className="heading-sub-title">
          We are Tamil speaking (Sri Lankan) church in Wageningen Netherlands, since 2001. We focus on God, Jesus with our brother and sister as one family of Christ. Our Activities are according to the bible. Love each other, preach the gospel to all nations (Mathew 28: 19)
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={images.ImageSlider_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.ImageSlider_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.ImageSlider_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.ImageSlider_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.ImageSlider_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.ImageSlider_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.ImageSlider_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ImageSlider;