import React from "react";
import Images from "../common/images/page";

const CertificateCard = (props) => {
  return (
    <div className="p-5 w-[170px] rounded bg-white text-center flex items-center justify-center">
      <div>
        <div className="mb-5">
          <Images
            src={`images/png/${props.imageUrl}`}
            alt="Certificate Image"
            width={60}
            height={60}
          />
        </div>
        <hr className="mb-2"></hr>
        <div className="mb-2 text-blueColor font-normal text-sm">
          {props.courses}
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
