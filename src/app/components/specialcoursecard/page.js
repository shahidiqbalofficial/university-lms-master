import React from "react";
import { FaArrowRight, FaCaretRight } from "react-icons/fa";
import Images from "../common/images/page";

const SpecialCourseCard = (props) => {
return (
  <div className="my-3  w-full md:w-[400px] bg-white hover:bg-lightCard border border-lightCard rounded-lg hover:scale-105 transition duration-700 ease-in-out">
    <a href="#">
      <Images
        src={`images/png/${props.imagePath}`}
        alt="Course Image"
        width={400}
        height={400}
      />
    </a>
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-lg my-3 font-semibold tracking-tight text-blueColor">
          {props.title}
        </h5>
        <p className="text-xs text-gray-500 font-normal my-3">{props.desc}</p>
      </a>
    </div>
  </div>
);
};

export default SpecialCourseCard;
