"use client";
import React from "react";
import { FaCheck, FaPlay } from "react-icons/fa";
import Testimonial from "../components/testimonial/page";
import BreadCrumb from "../components/common/breadcrumb/page";

const About = () => {
  // for testimonial
  const testimonial = [
    {
      id: 1,
      message:
        "Skill Earnify has been my go-to platform for skill development. Their courses are both comprehensive and easy to follow, and the instructors are truly experts in their fields. Thanks to Skill Earnify, I've gained the confidence and knowledge I needed to excel in my career.",
      userName: "John Doe",
      userDesigination: "CEO at Skype",
    },
    {
      id: 2,
      message:
        "Skill Earnify has been my go-to platform for skill development. Their courses are both comprehensive and easy to follow, and the instructors are truly experts in their fields. Thanks to Skill Earnify, I've gained the confidence and knowledge I needed to excel in my career.",
      userName: "Muhammad Kashif",
      userDesigination: "Web developer at Snipbyte",
    },
    {
      id: 3,
      message:
        "Skill Earnify has been my go-to platform for skill development. Their courses are both comprehensive and easy to follow, and the instructors are truly experts in their fields. Thanks to Skill Earnify, I've gained the confidence and knowledge I needed to excel in my career.",
      userName: "Ella John",
      userDesigination: "Designer at Pearl",
    },
  ];
  // for responsive testimonial carousal

  return (
    <div className="">
      <BreadCrumb label="About us" />
      <div className="p-5 lg:p-[60px] lg:flex lg:items-center lg:gap-[40px]">
        {/* for images  */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <div>
              {" "}
              <img
                className="h-full w-full lg:h-[400px] lg:w-[250px] mb-2 rounded-lg"
                src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg"
                alt="profile picture"
              />
            </div>
            <div>
              {" "}
              <img
                className="h-full w-full lg:h-[300px] lg:w-[300px] mb-2 lg:mb-[30px]  rounded-lg"
                src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HR0835.jpg"
                alt="profile picture"
              />
              <img
                className="h-full w-full lg:h-[300px] lg:w-[300px] mb-2 lg:mb-[30px]  rounded-lg"
                src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/TIN0846F.jpeg"
                alt="profile picture"
              />
            </div>
          </div>
        </div>
        {/* for about text  */}
        <div className="w-full lg:w-1/2 ">
          <div className="mb-5 lg:mb-[45px] text-grayColor text-2xl md:text-4xl font-bold leading-loose">
            Whether you want to learn or to share what you know you’ve come to
            the right place
          </div>
          <div className="mb-5 lg:mb-[45px] text-grayColor text-sm leading-loose">
            World-class training and development programs developed by top
            teachers. Build skills with courses, certificates, and degrees
            online from world-class universities and companies.
          </div>
          <div className="mb-5 lg:mb-[45px]">
            <div className="mb-3 flex items-center gap-3">
              <FaCheck className="text-blueColor" />
              <div className=" text-sm font-light text-grayColor">
                Get access to 4,000+ of our top courses
              </div>
            </div>
            <div className="mb-3 flex items-center gap-3">
              <FaCheck className="text-blueColor" />
              <div className=" text-sm font-light text-grayColor">
                Popular topics to learn now
              </div>
            </div>
            <div className="mb-3 flex items-center gap-3">
              <FaCheck className="text-blueColor" />
              <div className=" text-sm font-light text-grayColor">
                Find the right instructor for you
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex items-center gap-3">
              <button className=" rounded-full p-3 bg-indigo-700 flex items-center">
                <FaPlay className="animate-pulse  text-lg text-white" />
              </button>
              <div className="text-grayColor  text-base font-bold ">
                Play Now
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* counter section  */}
      <div className="bg-lightCard p-5 lg:p-[60px]">
        <div className="mb-5 lg:mb-[50px] w-full lg:w-1/2 mx-auto text-center text-grayColor text-2xl md:text-4xl font-bold leading-loose">
          Our global community and our course catalog get bigger
        </div>
        <div className="flex items-center  justify-center flex-wrap">
          <div className="w-full md:w-3/12 text-center">
            <div className="mb-2 text-grayColor text-2xl md:text-4xl font-bold leading-loose">
              300+
            </div>
            <div className="text-grayColor text-sm leading-loose">
              Hours of learning
            </div>
          </div>

          <div className="w-full md:w-3/12 text-center">
            <div className="mb-2 text-grayColor text-2xl md:text-4xl font-bold leading-loose">
              650+
            </div>
            <div className="text-grayColor text-sm leading-loose">
              Online Instructor
            </div>
          </div>
          <div className="w-full md:w-3/12 text-center">
            <div className="mb-2 text-grayColor text-2xl md:text-4xl font-bold leading-loose">
              1200+
            </div>
            <div className="text-grayColor text-sm leading-loose">
              Enrolled Learning
            </div>
          </div>
          <div className="w-full md:w-3/12 text-center">
            <div className="mb-2 text-grayColor text-2xl md:text-4xl font-bold leading-loose">
              100%
            </div>
            <div className="text-grayColor text-sm leading-loose">
              Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
      {/* top rated instructor  */}
      <div className="bg-white p-5 lg:p-[60px]">
        <div className="mb-5 lg:mb-[50px] w-full lg:w-1/2 mx-auto text-center text-grayColor text-2xl md:text-4xl font-bold leading-loose">
          Top Rated Instructors
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="relative flex flex-col items-center justify-center">
            <img
              className="h-full w-full lg:h-[400px] lg:w-[250px] mb-2 rounded-lg hover:scale-105 transition duration-700 ease-in-out cursor-pointer"
              src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg"
              alt="profile picture"
            />
            <div className="text-center absolute bottom-5 bg-white px-2 py-1 rounded-lg">
              <div className="mb-1">John</div>
              <div className="mb-1">English Teacher</div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center">
            <img
              className="h-full w-full lg:h-[400px] lg:w-[250px] mb-2 rounded-lg hover:scale-105 transition duration-700 ease-in-out cursor-pointer"
              src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg"
              alt="profile picture"
            />
            <div className="text-center absolute bottom-5 bg-white px-2 py-1 rounded-lg">
              <div className="mb-1">John</div>
              <div className="mb-1">English Teacher</div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <img
              className="h-full w-full lg:h-[400px] lg:w-[250px] mb-2 rounded-lg hover:scale-105 transition duration-700 ease-in-out cursor-pointer"
              src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg"
              alt="profile picture"
            />
            <div className="text-center absolute bottom-5 bg-white px-2 py-1 rounded-lg">
              <div className="mb-1">John</div>
              <div className="mb-1">English Teacher</div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <img
              className="h-full w-full lg:h-[400px] lg:w-[250px] mb-2 rounded-lg hover:scale-105 transition duration-700 ease-in-out cursor-pointer"
              src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg"
              alt="profile picture"
            />
            <div className="text-center absolute bottom-5 bg-white px-2 py-1 rounded-lg">
              <div className="mb-1">John</div>
              <div className="mb-1">English Teacher</div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial  */}
      <div className="lg:flex lg:items-center justify-center mb-5 p-5 lg:p-[60px]">
        {testimonial.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex items-center justify-center"
          >
            <Testimonial
              message={testimonial.message}
              userName={testimonial.userName}
              userDesigination={testimonial.userDesigination}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
