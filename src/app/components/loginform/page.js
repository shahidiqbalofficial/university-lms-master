import React from "react";
import Images from "../common/images/page";

const LoginForm = () => {
  return (
    <div className="p-5 bg-white shadow-lg">
      <div className="text-xl md:text-2xl lg:3xl text-center mb-2 flex justify-center">
        <Images
          src={`images/png/skillearnifylogo.png`}
          alt="logo Image"
          width={150}
          height={150}
        />
      </div>
      <div className="text-xl md:text-2xl lg:5xl text-center mb-1 text-darkBlue font-bold">
        Welcome Back!
      </div>
      <div className="text-center text-xs text-gray-400 mb-4">
        Please enter your credentials to access your account.
      </div>

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
        Sign in
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
          Don’t have an account?{" "}
          <span className="underline text-blueColor">Create now</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
