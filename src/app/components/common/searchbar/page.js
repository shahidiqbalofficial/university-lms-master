"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SearchBar = () => {
  const items = [
    "Discount courses 1",
    "Discount courses 2",
    "Discount courses 3",
    "Discount courses 4",
    "Discount courses 5",
    "Discount courses 6",
  ];

  // Configure the responsive breakpoints to determine the number of items per row
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="lg:w-8/12 w-full p-5 bg-gradient-to-r from-white via-white to-transparent shadow rounded">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2">
        <input
          type="text"
          placeholder="Subject, e.g. IT"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button className="w-full md:w-[200px] text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-3 mr-2 focus:outline-none shadow-lg">
          Search Courses
        </button>
      </div>

      <Carousel
        responsive={responsive}
        customTransition="transform 300ms ease-in-out"
        centerMode={false}
        showDots={false}
        slidesToSlide={1}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="my-3 mx-3 flex items-center justify-center border-r border-grayColor"
          >
            <div className=" text-base cursor-pointer ">{item}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SearchBar;
