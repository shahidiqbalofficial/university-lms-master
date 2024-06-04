import React from "react";
import Images from "../common/images/page";

const RegisterForm = () => {
  return (
    <div className="p-5 bg-white shadow-lg">
      <div className="text-xl md:text-2xl lg:3xl text-center mb-5 flex justify-center">
        <Images
          src={`images/png/skillearnifylogo.png`}
          alt="logo Image"
          width={150}
          height={150}
        />
      </div>
      <div className="text-xl md:text-2xl lg:5xl text-center mb-5 text-darkBlue font-bold">
        Begin your journey
      </div>
      {/* radio buttons start  */}
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-2">
          <div>
            <input type="radio"></input>
          </div>
          <div className="font-light text-sm md:text-xl">Learner</div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <input type="radio"></input>
          </div>
          <div className="font-light text-sm md:text-xl">Tutor</div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <input type="radio"></input>
          </div>
          <div className="font-light text-sm md:text-xl">Recruiter/Company</div>
        </div>
      </div>
      {/* radio buttons ends  */}
      {/* flex starts  */}
      <div className="md:flex md:gap-2">
        {/* first input field  */}
        <div className="w-full md:w-1/2">
          <div className="my-3">
            <label className=" font-normal text-base"> First name</label>
          </div>
          <div>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none bg-lightCard"
              placeholder="Enter First Name"
            />
          </div>
        </div>
        {/* first input field ends  */}
        {/* first input field  */}
        <div className="w-full md:w-1/2">
          <div className="my-3">
            <label className=" font-normal text-base"> Last name</label>
          </div>
          <div>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none bg-lightCard"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        {/* first input field ends  */}
      </div>
      {/* flex ends  */}
      {/* extra felds  */}
      <div className="w-full my-3">
        <div className="my-3">
          <label className=" font-normal text-base"> E-mail</label>
        </div>
        <div>
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none bg-lightCard"
            placeholder="example@gmail.com"
          />
        </div>
      </div>
      <div className="w-full my-3">
        <div className="my-3">
          <label className=" font-normal text-base"> Password</label>
        </div>
        <div className="relative">
          <input
            type="password"
            className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none bg-lightCard"
            placeholder="@#*%"
          />
          <div className="absolute bottom-3 right-2 ">
            <div className="p-2 border-0 border-l border-gray-200">
              <Images
                src={`images/svg/eye.svg`}
                alt="Eye Icon"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 my-3  items-center">
        <input type="checkbox" />
        <p className="text-gray-950 font-base text-sm">
          By Signin up. I agree with the{" "}
          <span className="text-blueColor underline">
            {" "}
            Terms of Use & Privacy Policy.{" "}
          </span>{" "}
        </p>
      </div>
      <button className="my-3 w-full text-center text-white  bg-gradient-to-r from-[#3023B2] to-[#7F56D9] p-3 rounded-xl">
        Sign Up
      </button>
      <div className="my-2 flex items-center">
        <hr className="flex-1 h-px my-8 border-1 bg-gray-200 " />
        <span className="mx-4 text-gray-400 ">OR</span>
        <hr className="flex-1 h-px my-8 border-1 bg-gray-200 " />
      </div>
      <div className="my-2">
        <div className="flex gap-4 justify-center items-center">
          <div className="p-2 flex items-center justify-center rounded-lg border border-gray-200">
            <Images
              src={`images/svg/google.svg`}
              alt="goole Image"
              width={20}
              height={20}
            />
          </div>
          <div className="p-2 flex items-center justify-center rounded-lg border border-gray-200">
            <Images
              src={`images/svg/linkedin.svg`}
              alt="linkedin Image"
              width={20}
              height={20}
            />
          </div>
          <div className="p-2 flex items-center justify-center rounded-lg border border-gray-200">
            <Images
              src={`images/svg/apple.svg`}
              alt="apple Image"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className="my-3 text-center">
        <p className="text-gray-400 text-sm">
          Already have an account?{" "}
          <span className="underline text-blueColor"> SignIn now</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
