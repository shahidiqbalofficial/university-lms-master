import React from "react";
import Images from "../images/page";

const LoginCard = (props) => {
  return (
    <>
      {!props.src1 ? (
        <div
          className={`bg-white p-3 rounded-lg text-gray-950  ${
            props.src === "cardIcon.svg"
              ? "shadow-sm w-[200px]"
              : "bg-opacity-80 w-[280px]"
          }`}
        >
          <div className="flex gap-3">
            <div>
              <div className="flex items-center justify-center gap-3 rounded-lg">
                <div
                  className={`${
                    props.src === "cardIcon2.svg"
                      ? "p-2 bg-[#F3627C] rounded-lg"
                      : ""
                  }`}
                >
                  <div
                    className={`${
                      props.src === "cardIcon.svg"
                        ? "bg-blueColor"
                        : props.src === "cardIcon2.svg"
                        ? "bg-white"
                        : "bg-orange-300"
                    } p-2 rounded-lg flex items-center justify-center`}
                  >
                    <Images
                      src={`images/svg/${props.src}`}
                      alt="cardIcon"
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-gray-950 font-medium text-sm mb-1">
                    {props.title}
                  </div>
                  <div className="text-gray-950 font-light text-sm ">
                    {props.desc}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3 rounded-lg text-gray-950 w-[280px] text-center bg-opacity-80 bg-white">
          <div className="flex items-center justify-center">
            <div>
              <div className="my-2 flex">
                <div>
                  <Images
                    src={`images/png/${props.src}`}
                    alt="cardIcon"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <Images
                    src={`images/png/${props.src}`}
                    alt="cardIcon"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <Images
                    src={`images/png/${props.src2}`}
                    alt="cardIcon"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <Images
                    src={`images/png/${props.src3}`}
                    alt="cardIcon"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="w-[28px] h-[28px] text-xs rounded-full text-white bg-darkBlue flex items-center justify-center">
                  90+
                </div>
              </div>
              <div className="text-gray-950 font-medium text-sm mb-1">
                {props.title}
              </div>
              <div className="my-2">
                <button className="bg-blueColor text-white rounded-2xl py-2 px-5 text-center">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginCard;
