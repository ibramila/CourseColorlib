import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        style={{ height: "100vh" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" style={{ width: "100%", height: "100%" }} alt="slide1" />
          <h1 style={{ color: "white", fontSize: "50px", position: "absolute", top: "50%", left: "30%", zIndex: 999 }}>GET YOUR  <span style={{ backgroundColor: "#faba84", padding: "0 10px" }}>EDUCATION</span> today!</h1>

        </SwiperSlide>
        <SwiperSlide>
          <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" style={{ width: "100%", height: "100%" }} alt="slide1" />
          <h1 style={{ color: "white", fontSize: "50px", position: "absolute", top: "50%", left: "30%", zIndex: 999 }}>GET YOUR  <span style={{ backgroundColor: "#faba84", padding: "0 10px" }}>EDUCATION</span> today!</h1>

        </SwiperSlide>
        <SwiperSlide>
          <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" style={{ width: "100%", height: "100%" }} alt="slide1" />
          <h1 style={{ color: "white", fontSize: "50px", position: "absolute", top: "50%", left: "30%", zIndex: 999 }}>GET YOUR  <span style={{ backgroundColor: "#faba84", padding: "0 10px" }}>EDUCATION</span> today!</h1>

        </SwiperSlide>
      </Swiper>
    </>
  );
}