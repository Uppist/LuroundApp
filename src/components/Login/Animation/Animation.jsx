/** @format */

import React from "react";
// import styles from "./style.module.css";
import image from "../../elements/scan.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../elements/signup1.png";
import image2 from "../../elements/signup2.png";
import image3 from "../../elements/signuo3.png";

import "./animation.css";

export default function Animation() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <section className='animation'>
      <div className='slider-container'>
        <Slider {...settings}>
          <div className='p'>
            <img className='image1' src={image1} alt='' />
            <p>Create your profile page, add your services and rate card.</p>
          </div>
          <div className='p'>
            <img className='image2' src={image2} alt='' />
            <p>
              Organize your schedule and get booked based on your availability
            </p>
          </div>
          <div className='p'>
            {" "}
            <img className='image3' src={image3} alt='' />
            <p>Manage your business operations like a pro</p>
          </div>
        </Slider>
      </div>
    </section>
  );
}
