import React from "react";
import Images from "../images/page";

const TestimonialCard = (props) => {
  return (
    <div className=" p-5 bg-white md:w-[400px] w-full rounded shadow">
      <div className="text-darkBlue font-medium text-base md:text-xl my-3">
        {props.title}
      </div>
      <div className="text-sm text-gray-400 my-3">{props.desc}</div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div>
            <Images
              src={`images/png/${props.imgUrl}`}
              alt="user"
              width={50}
              height={50}
            />
          </div>
          <div>
            {" "}
            <div className="text-darkBlue text-base md:text-xl uppercase font-medium mb-1">
              {props.studentName}
            </div>
            <div className="text-gray-400 font-light text-sm">
              {props.desigination}
            </div>
            <div className="my-2">
              <Images
                src={`images/svg/Star.svg`}
                alt="star"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="p-3 flex items-center justify-center rounded-lg border border-gray-200">
            <Images
              src={`images/svg/linkedin.svg`}
              alt="linkedin Image"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
