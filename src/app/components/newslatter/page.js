import React from "react";
import Images from "../common/images/page";

const NewsLatter = () => {
  return (
    <div className="newslettersection bg-gray-200 p-5  ">
      <div className="lg:relative lg:flex lg:items-center lg:justify-between">
        <div className="ml-5 lg:ml-[50px]">
          <div className="text-2xl md:text-3xl font-bold text-darkBlue  mt-5 mb-1">
            Get <span className="text-blueColor"> 10% </span>
            off your first course
          </div>
          <div className="text-gray-800 text-xs mb-5 font-light">
            Enter your email address below to receive your discount code.
          </div>
          <div className="md:my-[50px] my-5 relative w-full md:w-[400px]">
            <input
              type="email"
              id="email"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-lg focus:outline-none"
              placeholder="e-mail address"
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-darkBlue rounded-r-md"
            >
              Get Coupon
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="absolute bottom-[-20px]  right-[200px]">
            <Images
              src={`images/png/student.png`}
              alt="User Image"
              width={180}
              height={180}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
