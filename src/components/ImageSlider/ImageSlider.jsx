// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import './ImageSlider.css';
// import {images} from '../../constants/index';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


// function ImageSlider() {
//   return (
//     <div className="container">
//       <div className="heading">Welcome to our church</div>
//       <div className="heading-sub-title">
//           We are Tamil speaking (Sri Lankan) church in Wageningen Netherlands, since 2001. We focus on God, Jesus with our brother and sister as one family of Christ. Our Activities are according to the bible. Love each other, preach the gospel to all nations (Mathew 28: 19)
//       </div>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src={images.ImageSlider_1} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={images.ImageSlider_2} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={images.ImageSlider_3} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={images.ImageSlider_4} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={images.ImageSlider_5} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={images.ImageSlider_6} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={images.ImageSlider_7} alt="slide_image" />
//         </SwiperSlide>

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default ImageSlider;






import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ImageSlider.css';
import { images } from '../../constants/index';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function ImageSlider() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openFullScreen = (image) => {
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  // Array of specific image paths
  const imagePaths = [
    images.ImageSlider_1,
    images.ImageSlider_2,
    images.ImageSlider_3,
    images.ImageSlider_4,
    images.ImageSlider_5,
    images.ImageSlider_6,
    images.ImageSlider_7,
    images.ImageSlider_8,
    images.ImageSlider_9,
  ];

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
        {imagePaths.map((image, index) => (
          <SwiperSlide key={index} onClick={() => openFullScreen(image)}>
            <img src={image} alt={`slide_image_${index}`} />
          </SwiperSlide>
        ))}
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

      {selectedImage && (
        <div className="fullscreen-overlay" onClick={closeFullScreen}>
          <img src={selectedImage} alt="full-screen-image" className="full-screen-img" />
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
