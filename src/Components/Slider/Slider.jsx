import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/controller"; // Ensure Controller CSS is imported
import './Slider.css';
import image1 from '../../Assets/Image1.jpg';
import image2 from '../../Assets/Image2.jpg';
import image3 from '../../Assets/Image3.jpg';
import image4 from '../../Assets/Image4.jpg';

export default function Slider() {
  // Initialize references for Swipers
  const mainSwiperRef = useRef(null);
  const stripSwiperRef = useRef(null);

  // Function to set the Swiper references and link the controllers
  const setControllers = () => {
    if (mainSwiperRef.current && stripSwiperRef.current) {
      mainSwiperRef.current.controller.control = stripSwiperRef.current;
      stripSwiperRef.current.controller.control = mainSwiperRef.current;
    }
  };

  // Define functions to set references when Swipers are initialized
  const handleMainSwiper = (swiper) => {
    mainSwiperRef.current = swiper;
    setControllers(); // After setting the ref, link the controllers
  };

  const handleStripSwiper = (swiper) => {
    stripSwiperRef.current = swiper;
    setControllers(); // After setting the ref, link the controllers
  };

  useEffect(() => {
    return () => {
      // Cleanup to prevent memory leaks
      if (mainSwiperRef.current) {
        mainSwiperRef.current.controller.control = null;
      }
      if (stripSwiperRef.current) {
        stripSwiperRef.current.controller.control = null;
      }
    };
  }, []); // Run once when the component is mounted

  return (
    <>
      {/* Main Swiper */}
      <Swiper
        onSwiper={handleMainSwiper} // Set reference when Swiper is initialized
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Controller]} // Include Controller module
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="" />
          <div className="slide">
            <h2>Delicious!</h2>
            <p>Coffee</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
          <div className="slide">
            <h2>Happiness</h2>
            <p>Feels Crazy</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
          <div className="slide">
            <h2>Night Out</h2>
            <p>Enjoy</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
          <div className="slide">
            <h2>Hobby</h2>
            <p>Pictures</p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Strip Swiper */}
      <Swiper
        onSwiper={handleStripSwiper} // Set reference when Swiper is initialized
        slidesPerView={1}
        spaceBetween={20}
        modules={[Controller]} // Include Controller module
        className="stripSwiper"
      >
        <SwiperSlide>
          <div className="strip">
            <p>Delicious! - Coffee</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="strip">
            <p>Happiness - Feels Crazy</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="strip">
            <p>Night Out - Enjoy</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="strip">
            <p>Hobby - Pictures</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
