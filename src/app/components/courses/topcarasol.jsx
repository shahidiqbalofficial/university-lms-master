"use client";
import React from "react";
import Slider from "react-slick";

function TopCarasol() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container w-11/12 mx-auto my-4 relative">
      
      <Slider {...settings}>

       <div className="h-60">
       
          <img
            className="object-cover h-full w-full rounded-md"
            src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="h-60">
         <img className="object-cover h-full w-full rounded-md" src="https://plus.unsplash.com/premium_photo-1678823283560-4453bbd2a368?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="h-60">
         <img className="object-cover h-full w-full rounded-md" src="https://images.unsplash.com/photo-1625662171891-9a3348f961f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="h-60">
         <img  className="object-cover h-full w-full rounded-md" src="https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
       
        
      </Slider>
    </div>
  );
}

export default TopCarasol;
