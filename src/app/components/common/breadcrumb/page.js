import React from "react";

const BreadCrumb = (props) => {
  return (
    <div className="flex items-center justify-center h-[200px] bg-gradient-to-r from-sky-400 via-sky-500 to-blueColor text-white text-3xl md:text-4xl lg:text-5xl font-bold">
      {props.label}
    </div>
  );
};

export default BreadCrumb;
