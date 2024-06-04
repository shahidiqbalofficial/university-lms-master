import React from "react";
import SearchBar from "../common/searchbar/page";
import Images from "../common/images/page";
import { FaBlog, FaCalendar, FaRocket, FaStar } from "react-icons/fa";
import BenifitCard from "../benifitcard/page";

const HeroSection = () => {
  return (
    <div>
      <div className="p-5 relative bg-gray-100 ">
        <div className="hidden md:block absolute top-0 left-0">
          <Images
            src={`images/svg/svg1.svg`}
            alt="Curve Line"
            width={50}
            height={50}
          />
        </div>
        <div className="hidden md:block absolute top-2 left-[-6px]">
          <Images
            src={`images/svg/svg1.svg`}
            alt="Curve Line"
            width={40}
            height={40}
          />
        </div>
        <div className="hidden md:block absolute top-0 left-0">
          <Images
            src={`images/svg/svg3.svg`}
            alt="Curve Line"
            width={60}
            height={60}
          />
        </div>
        <div className="hidden md:block absolute bottom-[90px] right-0">
          <Images
            src={`images/svg/halfcircle.svg`}
            alt="Curve Line"
            width={30}
            height={30}
          />
        </div>

        <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
          <Images
            src={`images/svg/halfcircle1.svg`}
            alt="Curve Line"
            width={90}
            height={90}
          />
        </div>
        <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
          <Images
            src={`images/svg/halfcircle2.svg`}
            alt="Curve Line"
            width={120}
            height={120}
          />
        </div>
        <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
          <Images
            src={`images/svg/halfcircle3.svg`}
            alt="Curve Line"
            width={140}
            height={140}
          />
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[300px] left-[-20px]">
            <Images
              src={`images/svg/halfstar.svg`}
              alt="half star"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="lg:m-[40px]">
          <div className=" md:flex md:justify-between">
            <div className="md:w-1/2 w-full">
              <div className="text-3xl font-bold my-4">
                Welcome to{" "}
                <span className="text-blueColor">
                  {" "}
                  Skillearnify Where skills{" "}
                </span>{" "}
                transform into success!
              </div>

              <div className="my-4 text-sm text-grayColor font-medium ">
                Discover the most effective way to learn new things and enhance
                your skills with Skillearnify.
              </div>

              <div className="my-4 flex gap-2">
                <button className="uppercase rounded-lg p-3 bg-blueColor text-center text-white text-sm">
                  Explore courses
                </button>
                <button className=" rounded-lg p-3 bg-white border border-blueColor text-blueColor uppercase text-sm">
                  Book a Free Demo
                </button>
              </div>
              <div className="my-4 text-sm text-grayColor font-light">
                30,000 Courses | 20,000 Expert Instructors <br></br> Empowering
                1.5 million learners Globally
              </div>

              <div className="my-5 flex items-center">
                <Images
                  src={`images/png/circleuser1.png`}
                  alt="User Image"
                  width={30}
                  height={30}
                />
                <Images
                  src={`images/svg/circleuser2.svg`}
                  alt="User Image"
                  width={30}
                  height={30}
                />
                <Images
                  src={`images/png/circleuser4.png`}
                  alt="User Image"
                  width={30}
                  height={30}
                />
                <Images
                  src={`images/png/circleuser5.png`}
                  alt="User Image"
                  width={30}
                  height={30}
                />
                <div className="p-1 rounded-full bg-darkBlue text-white text-xs font-medium flex justify-center items-center">
                  +9
                </div>
              </div>
            </div>
            <div className="flex items-center">
              {" "}
              <div className="my-auto ">
                {" "}
                <div className=" flex items-center gap-4">
                  <div>
                    <Images
                      src={`images/svg/commentIcon.svg`}
                      alt="Comment Icon"
                      width={15}
                      height={15}
                    />
                  </div>
                  <div className="relative  w-4/12">
                    <div className="hidden md:block absolute top-[-180px] right-5">
                      <Images
                        src={`images/png/fullstar.png`}
                        alt="Shape Image"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="my-4 text-sm text-grayColor font-medium ">
                      Skillearnify boosted my confidence with tailored courses
                      and engaging content. A great journey to success!
                    </div>
                    <div className="hidden md:block absolute top-[90px] right-2">
                      <Images
                        src={`images/svg/arrow.svg`}
                        alt="Shape Image"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Images
                      src={`images/png/shape.png`}
                      alt="Shape Image"
                      width={400}
                      height={400}
                    />
                    <div className="absolute top-2 left-2 right-2">
                      <Images
                        src={`images/png/shape2.png`}
                        alt="Shape Image"
                        width={390}
                        height={390}
                      />
                    </div>
                    <div className="absolute top-[40px] left-3">
                      <Images
                        src={`images/png/student.png`}
                        alt="User Image"
                        width={350}
                        height={350}
                      />
                    </div>
                  </div>
                </div>
                <div className="relative"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-darkBlue">
        <div className="lg:flex lg:gap-2 lg:items-center lg:justify-between">
          <div className="md:flex md:gap-2 md:items-center md:justify-between">
            <BenifitCard
              src="images/svg/quality4.svg"
              title="Lifetime Access"
              desc="Unlimited access to
            lifelong video lectures."
            />
            <BenifitCard
              src="images/svg/quality.svg"
              title="Expert Mentors"
              desc="Unlimited access to lifelong video lectures."
            />
          </div>
          <div className="md:flex md:gap-2 md:items-center md:justify-between">
            <BenifitCard
              src="images/svg/quality2.svg"
              title="Get Certified"
              desc="Unlimited access to
            lifelong video lectures."
            />
            <BenifitCard
              src="images/svg/quality1.svg"
              title="Installment Pay"
              desc="Unlimited access to
            lifelong video lectures."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
