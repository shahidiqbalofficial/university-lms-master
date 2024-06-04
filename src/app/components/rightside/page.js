import React from "react";
import Images from "../common/images/page";
import LoginCard from "../common/logincard/page";

const RightSide = () => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <Images
          src={`images/png/girl.png`}
          alt="Student Img"
          width={550}
          height={550}
        />
        <div className="absolute top-[120px] left-[-25px]">
          <LoginCard title="250k" desc="Assisted Student" src="cardIcon.svg" />
        </div>
        <div className="absolute top-[260px] right-[-75px]">
          <LoginCard
            title="Congratulations"
            desc="Your admission completed"
            src="cardIcon1.svg"
          />
        </div>
        <div className="absolute bottom-1 right-[-25px]">
          <LoginCard
            title="500+"
            desc="companies learner "
            src="cardIcon2.svg"
          />
        </div>
        <div className="absolute bottom-[80px] left-[-65px]">
          <LoginCard
            title="500+ Instructor"
            src="circleuser1.png"
            src1="circleuser1.png"
            src2="circleuser4.png"
            src3="circleuser5.png"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
