import React from "react";
import { FaStar, FaStopwatch } from "react-icons/fa";

function Bannercard({review,rating,price}) {
  return (
    <div className="w-[15.2rem] h-80 rounded-md shadow-md shadow-gray-400">
      {/* image container */}
      <div className="h-36 rounded-tl-md rounded-tr-md">
        <img
          src="https://images.unsplash.com/photo-1712035752690-70071bc5173b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full rounded-tl-md rounded-tr-md w-full"
          alt=""
        />
        <h1 className="text-sm my-2  font-[900] tracking-widest  text-center">
          Accounts Recieved in SAP
        </h1>
        <p className="text-[11px] font-[500] px-3">
          Lorem ipsum dolor sit, amet for theyr consectetur Incidunt nihil{" "}
          <span className="text-[8px]">.More</span>
        </p>
        <p className="text-red-500 px-3 text-[11px] font-[600] my-2">
          Save 57% Offer ends on March 31,2024
        </p>
        <div className="flex items-center justify-between px-3">
          <div className="flex items-center gap-1 py-2">
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h1 className="text-sm tracking-wider font-[900]">Tutor Name</h1>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-300" size={15} />
                <h1 className="text-sm font-[600]">{rating}</h1>
                <p className="text-xs">({review})</p>
              </div>
            </div>
          </div>
          {/* other side */}
          <div>
            <div className="flex items-center gap-1">
              <FaStopwatch size={13} />
              <p className="text-[10px] font-[600]">08 hr 15mins</p>
            </div>
            <p className="text-xs font-[600]">${price}/-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bannercard;
