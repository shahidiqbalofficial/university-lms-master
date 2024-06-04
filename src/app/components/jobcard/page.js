import React from "react";
import Images from "../common/images/page";

const JobCard = (props) => {
  return (
    <div className="bg-white rounded-md p-5 relative w-full md:w-[390px]">
      <div className="absolute right-2 top-2">
        <div className="flex gap-2 items-center">
          <div className="text-gray-500 text-sm font-normal">{props.time}</div>
          <div className="bg-lightCard text-blueColor py-1 px-2 text-sm text-center">
            {props.jobType}
          </div>
        </div>
      </div>
      <div className="my-2">
        <div className="flex gap-3 items-center">
          <div className="p-2 flex items-center justify-center w-[50px] h-[50px] border border-gray-200 rounded-lg ">
            <Images
              src={`images/png/${props.icon}`}
              alt="Job Icon"
              width={40}
              height={40}
            />
          </div>
          <div>
            <div className="text-lg text-black font-medium mt-2">
              {props.location}
            </div>
            <div className="text-sm text-gray-500 font-normal">
              {props.title}
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 text-sm font-normal text-gray-500">{props.desc}</div>
      <div className="my-5 flex justify-between">
        <div>
          <button className="py-2 px-4 text-center rounded-lg bg-blueColor text-white">
            Apply Now
          </button>
        </div>
        <div className="text-lg text-blueColor font-medium">
          <span className="">560</span>{" "}
          <span className="text-sm text-gray-500">/hour</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
