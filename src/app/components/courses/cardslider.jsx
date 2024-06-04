"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import SlideCard from "./slidecard";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container text-black">
      <div>
        <h1 className="text-xl font-[600]">
          Best Courses
        </h1>
        <p className="text-gray-600 text-sm">Most viewed and all-time top-selling courses</p>
      </div>
      <Slider {...settings}>
        <div className="">
          <SlideCard />
        </div>
        <div className=" px-2">
          <SlideCard />
        </div>
        <div className=" px-2">
          <SlideCard />
        </div>
        <div className=" px-2">
          <SlideCard />
        </div>
        <div className=" px-2">
          <SlideCard />
        </div>
        <div className=" px-2">
          <SlideCard />
        </div>
        <div className=" px-2">
          <SlideCard />
        </div>
        <div className="px-2">
          <SlideCard />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
