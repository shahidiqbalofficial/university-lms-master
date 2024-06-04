import React from "react";
import RightSide from "../components/rightside/page";
import Loginform from "../components/registerform/page";

const Login = () => {
  return (
    <div className="bg-lightCard lg:flex lg:justify-between lg:px-5 ">
      <div className="w-full lg:w-5/12 lg:px-5">
        <Loginform />
      </div>
      <div className="hidden lg:block w-full lg:w-7/12 ">
        {" "}
        <RightSide />
      </div>
    </div>
  );
};

export default Login;
