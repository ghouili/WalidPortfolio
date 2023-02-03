import "./Portfolio.css";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Sidebar from "../../Images/sidebar.png";
import Ecommerce from "../../Images/ecommerce.png";
import Hoc from "../../Images/hoc.png";
import MusicApp from "../../Images/musicapp.png";
import { themeContext } from "../../Context/Context";

export const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      {/* Heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="Sidebar Project" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecommerce} alt="Ecommerce Project" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Hoc} alt="Hoc Project" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={MusicApp} alt="MusicAppProject" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
