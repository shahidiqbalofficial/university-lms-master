import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function SlideCard() {
  return (
    <div className="w-60 h-[21rem] border rounded-md m-4">
      {/* image */}
      <div className="bg-red-200 h-32 rounded-tl-md rounded-tr-md relative">
        <div className="h-8 w-8 bg-white rounded-full right-1 top-1 absolute flex items-center justify-center">
          <FaRegHeart color="orange"/>
        </div>
        {/* nav part */}
        <p className="text-white text-[10px] px-2 absolute">Large Lookup</p>
        <img
          src="https://images.unsplash.com/photo-1620550580806-9426033a77a3?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-tl-md rounded-tr-md w-full"
        />
        <h1 className="py-1 text-sm text-gray-400 px-4">Web & App Design</h1>
        <h1 className="text-sm px-4 py-2">The Data Science Course</h1>
        <h1 className="text-sm  px-4">2023:Complete Data Science</h1>
        <div className="flex items-center text-sm gap-2 px-4 py-2">
          <FaStar fill="yellow" size={10} />
          <h1>4.82</h1> <span>94 reviews</span>
        </div>
        {/* line here */}
        <div className="w-full h-1"></div>
        <div className="flex items-center justify-between px-4">
          {/* img profile */}
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            className="rounded-full h-6 w-6 object-cover"
          />
          <h1 className="text-xs text-gray-400">
            Starting at <span>$900</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SlideCard;
