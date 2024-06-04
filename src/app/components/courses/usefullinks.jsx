import React from "react";
import Coursename from "./coursename";

function Usefullinks() {
  return (
    <div className=" w-10/12 lg:h-20 mx-auto py-1 flex flex-col gap-1 my-2">
      <h1 className="text-xl font-[600]">Usefull Links</h1>
      <div className="flex items-center flex-wrap gap-4 lg:flex-nowrap justify-center lg:justify-between">
        <Coursename name="Disploma Courses"/>
        <Coursename name="Master Courses"/>
        <Coursename name="Download Courses Curriculum"/>
        <Coursename name="Get Offer Coupan"/>
        <Coursename name="Send Inquiry"/>
        <Coursename name="Ask for any course"/>
        <Coursename name="All courses OverView"/>
      </div>
    </div>
  );
}

export default Usefullinks;
