import React from "react";
import Images from "../images/page";
import { FaStar } from "react-icons/fa";

const CourseCard = (props) => {
  return (
    <div>
      <div className="my-3  w-full md:w-[300px] bg-white hover:bg-lightCard border border-lightCard shadow rounded-lg hover:scale-105 transition duration-700 ease-in-out">
        <a href="#">
          <Images
            src={`images/png/${props.imagePath}`}
            alt="Course Image"
            width={400}
            height={400}
          />
        </a>
        <div className="px-5 my-2 flex justify-between">
          <div>
            <button className="text-blueColor font-medium text-sm py-2 px-5 rounded-lg bg-blue-200">
              All Levels
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <Images
                src={`images/svg/lecture.svg`}
                alt="Course Image"
                width={20}
                height={20}
              />
            </div>
            <div className="text-darkBlue text-sm font-medium">
              29 Lectures
            </div>
          </div>
        </div>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-base my-3 font-semibold tracking-tight text-darkBlue">
              {props.title}
            </h5>
          </a>
          <div className="flex gap-3 items-center mt-2.5 mb-5">
            <div>
              <Images
                src={`images/png/circleuser1.png`}
                alt="user Image"
                width={50}
                height={50}
              />
            </div>
            <div className="w-full flex justify-between items-center">
              {" "}
              <div className="">
                <div className="mb-1 font-medium text-darkBlue text-base">
                  Tutor Name
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <FaStar className="text-yellow-300" />
                  </div>
                  <div className="text-base text-darkBlue">4.98</div>
                  <div className="text-sm text-gray-700">(103)</div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-1">
                  <Images
                    src={`images/svg/clock.svg`}
                    alt="clock Icon"
                    width={10}
                    height={10}
                  />
                  <div className="text-sm text-darkBlue">08 hr 15 mins</div>
                </div>
                <div className="text-lg text-darkBlue font-medium">
                  ₹28,320/-
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
