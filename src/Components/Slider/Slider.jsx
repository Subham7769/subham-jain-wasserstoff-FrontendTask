import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/controller";
import './Slider.css';
import image1 from '../../Assets/Image1.png';
import image2 from '../../Assets/Image2.png';
import image3 from '../../Assets/Image3.png';
import image4 from '../../Assets/Image4.png';
import locationIcon from '../../Assets/location_on.png';

// Create a data structure for the slides to avoid repetition
const mainSlides = [
  { image: image1, eventName: "Event Name", location: "Location" },
  { image: image2, eventName: "Event Name", location: "Location" },
  { image: image3, eventName: "Event Name", location: "Location" },
  { image: image4, eventName: "Event Name", location: "Location" },
];

const stripSlides = [
  "Event: Oasis Bus tour, JLN Stadium, Delhi",
  "Collection Live: Meta Lives, live on astrix",
  "Event: Oasis Bus tour, JLN Stadium, Delhi",
  "Collection Live: Meta Lives, live on astrix",
];

export default function Slider() {
  const mainSwiperRef = useRef(null);
  const stripSwiperRef = useRef(null);

  const setControllers = () => {
    if (mainSwiperRef.current && stripSwiperRef.current) {
      mainSwiperRef.current.controller.control = stripSwiperRef.current;
      stripSwiperRef.current.controller.control = mainSwiperRef.current;
    }
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
  }, []); // Cleanup controllers on unmount

  return (
    <div className="slider-container">
      <div className="textContainer">
        <p>
          ASTR<br />
          IX<br />
          EVE<br />
          NTS
        </p>
      </div>

      <div className="main-slider">
        <Swiper
          ref={mainSwiperRef}
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;
            setControllers();
          }}
          modules={[Autoplay, Navigation, Controller]}
          className="mySwiper"
        >
          {mainSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className="slide">
                <h1>{slide.eventName}</h1>
                <div className="location">
                  <img src={locationIcon} alt="Location" />
                  <p>{slide.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="strip-slider">
        <Swiper
          ref={stripSwiperRef}
          slidesPerView={1}
          direction="vertical"
          spaceBetween={0}
          onSwiper={(swiper) => {
            stripSwiperRef.current = swiper;
            setControllers();
          }}
          modules={[Controller]}
          className="stripSwiper"
        >
          {stripSlides.map((text, index) => (
            <SwiperSlide key={index}>
              <div className="strip">
                <p>{text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
