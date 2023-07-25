import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "./Footer";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FreeMode,
  EffectCards,
  Keyboard,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper";

import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img4.jpg";
import img5 from "./assets/images/img5.jpg";
import img6 from "./assets/images/img6.jpg";
import img7 from "./assets/images/img7.jpg";
import img8 from "./assets/images/img8.jpg";

const App = () => {
  return (
    <div className="container">
      <h1 className="header">Fun Art Gallery</h1>
      <Swiper
        className="swiper_container"
        keyboard={{
          enabled: true,
        }}
        grabCursor={true}
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          transition: 2000,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[
          EffectCards,
          Keyboard,
          EffectCoverflow,
          Pagination,
          Navigation,
        ]}
      >
        <SwiperSlide>
          <img src={img1} alt="image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="image 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="image 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="image 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="image 7" />
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
      <Footer />
    </div>
  );
};

export default App;
