"use client";
import React, { useState } from "react";
import bg from "../../../../public/images/jpg/cover2.jpg";
import bg1 from "../../../../public/images/jpg/cover1.jpg";
import bg2 from "../../../../public/images/jpg/cover3.jpg";
import data from "../../../../data";

import { FaSearch } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";

function TopSlider({ setSearchData, searchData, setcheck, check }) {
  const [nextState, setNextState] = useState(0);
  const [stateCourse, setStateCourse] = useState("");
  const [stateCatagory, setStateCatagory] = useState("");
  const [stateSubCatagory, setSubStateCatagory] = useState("");

  const handleNext = () => {
    setNextState((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setNextState((e) => e - 1);
  };
  const bag = [
    {
      img: bg,
    },
    {
      img: bg1,
    },
    {
      img: bg2,
    },
  ];

  // search functionality
  const handleCourseChange = (e) => {
    setStateCourse(() => e.target.value);
    console.log("Course name:", e.target.value);
  };

  //catagory change
  const handleCatagoryChange = (e) => {
    setStateCatagory(() => e.target.value);
    console.log("Catagory name:", e.target.value);
  };

  //sub catagory
  const handleSubCatagoryChange = (e) => {
    setSubStateCatagory(() => e.target.value);
    console.log("sub catagory:", e.target.value);
  };

  //Search function here
  const handleSearch = () => {
    console.log(
      `All getted values:${stateCourse} and ${stateCatagory} and ${stateSubCatagory}`
    );

    if (stateCourse == "" || stateCatagory == "" || stateSubCatagory == "") {
      setcheck(false);
    }
    const SearchRecord = data.filter((item) => {
      return (
        // Course, case-insensitive match
        item.courseName.toLowerCase().includes(stateCourse.toLowerCase()) &&
        // Catagory ,case-insensitive
        item.category
          .toLocaleLowerCase()
          .includes(stateCatagory.toLocaleLowerCase()) &&
        //sub catagory
        item.subcategory
          .toLocaleLowerCase()
          .includes(stateSubCatagory.toLocaleLowerCase())
      );
    });

    // Update filteredResults state with the search results
    setSearchData(SearchRecord);
    // Set check to true to indicate that search results should be displayed
    setcheck(true);
    if (stateCourse == "" || stateCatagory == "" || stateSubCatagory == "") {
      setcheck(false);
    }
  };

  return (
    <div
      className="w-80 md:w-11/12 lg:h-56 bg-red-500 mx-auto my-4 rounded-lg px-4 md:px-20 p-6 relative "
      style={{
        backgroundImage: `url(${bag[nextState].img.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* next button */}
      <div
        className={`absolute right-4 top-[40%] ${
          nextState == 2 ? `hidden` : `block`
        }`}
      >
        <GrNext size={40} color="gray" onClick={handleNext} />
      </div>
      {/* previous button */}
      <div
        className={`absolute left-4 top-[40%] ${
          nextState == 0 ? `hidden` : `block`
        }`}
      >
        <GrPrevious size={40} color="gray" onClick={handlePrevious} />
      </div>
      <div className="w-full  md:w-9/12 lg:h-44">
        <h1 className="text-xl font-[600] text-white">Design and Creative</h1>
        <p className="text-white text-xs tracking-normal my-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
        {/* search bar */}
        <div className="bg-white w-full h-9 p-1 rounded-md flex flex-wrap  lg:flex-nowrap gap-4 lg:gap-0 items-center justify-center md:justify-between my-4">
          {/* looking section */}
          <div className="flex text-black items-center p-2 md:p-1 gap-1 w-fit ">
            <FaSearch className="text-gray-400 font-[400]" size={15} />
            <input
              type="text"
              className="outline-none text-xs h-full w-full"
              name=""
              placeholder="What are you looking for?"
              id=""
            />
          </div>

          {/* filter by course */}
          <div className="flex items-center gap-1">
            <div className=" h-7 border-r"></div>
            <select
              className="outline-none bg-white w-fit text-xs px-2 py-2 rounded-md"
              onChange={handleCourseChange}
              value={stateCourse}
            >
              <option value="" className="bg-white flex items-center">
                Filter by Course
              </option>
              {Array.from(new Set(data.map((item) => item.courseName))).map(
                (course, index) => (
                  <option className="bg-white" key={index} value={course}>
                    {course.slice(0, 8)}
                  </option>
                )
              )}
            </select>
          </div>

          {/* filter by super catagory */}
          <div className="flex items-center gap-1">
            <div className=" h-7 border-r"></div>
            <select
               className="outline-none bg-white w-fit text-xs px-2 py-2 rounded-md"
              onChange={handleCatagoryChange}
              value={stateCatagory}
            >
              <option value="" className="bg-white flex items-center">
                Super Catagory
              </option>
              {Array.from(new Set(data.map((item) => item.category))).map(
                (catagory, index) => (
                  <option className="bg-white" key={index} value={catagory}>
                    {catagory}
                  </option>
                )
              )}
            </select>
          </div>
          {/* Sub Catagory */}
          <div className="flex items-center gap-1">
            <div className=" h-7 border-r"></div>
            <select
              className="outline-none bg-white w-fit text-xs px-2 py-2 rounded-md"
              onChange={handleSubCatagoryChange}
              value={stateSubCatagory}
            >
              <option value="" className="bg-white flex items-center">
                Sub Catagory
              </option>
              {Array.from(new Set(data.map((item) => item.subcategory))).map(
                (subcatagory, index) => (
                  <option className="bg-white" key={index} value={subcatagory}>
                    {subcatagory}
                  </option>
                )
              )}
            </select>
          </div>
          {/* search button */}
          <button
            className="text-white bg-blue-500 px-2 py-1 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <p className="text-white text-xs leading-4 w-80 md:w-auto my-4 mt-40 md:mt-20 lg:mt-0">
          Blockchain | Business & CRM | Cloud Computing | Graphic Designer |
          Deigtal Marketing | SAP | Oracle | Networking | Salesforce | <br />
          Blockchain | Business & CRM | Cloud Computing | Graphic Designer |
          Deigtal Marketing | SAP | Oracle | Networking | Salesforce |{" "}
        </p>
      </div>
    </div>
  );
}

export default TopSlider;
