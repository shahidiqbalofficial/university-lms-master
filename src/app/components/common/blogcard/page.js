import React from "react";
import Images from "../images/page";

const BlogCard = (props) => {
  return (
    <div className="my-3  w-full md:w-[350px] bg-white hover:bg-lightCard border border-lightCard rounded-lg hover:scale-105 transition duration-700 ease-in-out">
      <a href="#">
        <Images
          src={`images/png/${props.imagePath}`}
          alt="Course Image"
          width={350}
          height={350}
        />
      </a>
      <div className="px-5 pb-5">
        <div className="my-3">
          <span className="  text-center text-xs text-blueColor bg-blue-200 px-4 py-2 rounded-xl font-normal my-3">
            {props.category}
          </span>
        </div>
        <a href="#">
          <h5 className="text-lg my-3 font-semibold tracking-tight text-blueColor">
            {props.title}
          </h5>
        </a>
        <div className="my-3">
          <div className="flex gap-5">
            <div className="flex gap-2 items-center">
              <Images
                src={`images/svg/user.svg`}
                alt="Admin"
                width={20}
                height={20}
              />
              <div className="text-xs font-light text-darkBlue">By Admin </div>
            </div>
            <div className="flex gap-2 items-center">
              <Images
                src={`images/svg/calander.svg`}
                alt="Calander"
                width={20}
                height={20}
              />
              <div className="text-xs font-light text-darkBlue">
                23 Aug, 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
