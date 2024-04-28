import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/controller"; // Ensure Controller CSS is imported
import './Slider.css';
import image1 from '../../Assets/Image1.png';
import image2 from '../../Assets/Image2.png';
import image3 from '../../Assets/Image3.png';
import image4 from '../../Assets/Image4.png';
import location from '../../Assets/location_on.png';

export default function Slider() {
  const mainSwiperRef = useRef(null);
  const stripSwiperRef = useRef(null);

  const setControllers = () => {
    if (mainSwiperRef.current && stripSwiperRef.current) {
      mainSwiperRef.current.controller.control = stripSwiperRef.current;
      stripSwiperRef.current.controller.control = mainSwiperRef.current;
    }
  };

  const handleMainSwiper = (swiper) => {
    mainSwiperRef.current = swiper;
    setControllers();
  };

  const handleStripSwiper = (swiper) => {
    stripSwiperRef.current = swiper;
    setControllers();
  };

  useEffect(() => {
    return () => {
      if (mainSwiperRef.current) {
        mainSwiperRef.current.controller.control = null;
      }
      if (stripSwiperRef.current) {
        stripSwiperRef.current.controller.control = null;
      }
    };
  }, []); 

  return (
    <div className="slider-container"> 
      <div className="textContainer">
        <p>
            ASTR<br/>IX
        </p>
        <p>
            EVE<br/>NTS
        </p>
      </div>
      
      <div className="main-slider"> 
        <Swiper
          onSwiper={handleMainSwiper}
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Controller]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image1} alt="" />
            <div className="slide">
            <h1>Event Name</h1>
            <div className="location">
                <img src={location}  alt="" />
                <p>Location</p>    
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
            <div className="slide">
            <h1>Event Name</h1>
            <div className="location">
                <img src={location}  alt="" />
                <p>Location</p>    
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" />
            <div className="slide">
            <h1>Event Name</h1>
            <div className="location">
                <img src={location}  alt="" />
                <p>Location</p>    
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="" />
            <div className="slide">
            <h1>Event Name</h1>
            <div className="location">
                <img src={location}  alt="" />
                <p>Location</p>    
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
      <div className="strip-slider"> 
        <Swiper
          onSwiper={handleStripSwiper}
          slidesPerView={1}
          direction="vertical"
          spaceBetween={0}
          modules={[Controller]}
          className="stripSwiper"
        >
          <SwiperSlide>
            <div className="strip">
              <p>Event : Oasis Bus tour , JLN Stadium , Delhi </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="strip">
              <p>Collection Live : Meta Lives , live on astrix</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="strip">
              <p>vent : Oasis Bus tour , JLN Stadium , Delhi </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="strip">
              <p>Collection Live : Meta Lives , live on astrix</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
