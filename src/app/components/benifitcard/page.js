import React from "react";
import Images from "../common/images/page";

const BenifitCard = (props) => {
  return (
    <div className="bg-transparent p-5">
      <div className="flex items-center gap-4">
        <div>
          <Images src={props.src} alt="benifit" width={50} height={50} />
        </div>
        <div>
          <div className="text-white font-bold text-sm mb-4">{props.title}</div>
          <div className="text-white font-light text-sm mb-2">{props.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default BenifitCard;
