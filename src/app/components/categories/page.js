import React from "react";
import Images from "../common/images/page";

const Category = (props) => {
  return (
    <div className="bg-lightCard rounded-lg shadow w-full md:w-[180px] p-5 text-center">
      <div className=" rounded-full bg-white shadow w-[60px] h-[60px] flex justify-center items-center mx-auto my-3">
        <Images
          src={`images/svg/${props.icon}`}
          alt="Category Icon"
          width={30}
          height={30}
        />
      </div>
      <div className="text-darkBlue font-normal mb-2 text-sm">
        {props.label}
      </div>
      <div className="text-gray-400 font-normal mb-2 text-sm">
        {props.courses}
      </div>
    </div>
  );
};

export default Category;
