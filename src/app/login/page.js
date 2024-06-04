import Link from "next/link";
import React from "react";
import { FaAt, FaLock, FaStar, FaUser } from "react-icons/fa";
import RegisterForm from "../components/loginform/page";
import Images from "../components/common/images/page";

const Register = () => {
  return (
    <div className="bg-lightCard lg:flex lg:justify-between lg:pl-5 ">
      <div className="w-full lg:w-5/12 lg:pl-5 ">
        <RegisterForm />
      </div>
      <div className="hidden lg:block w-full lg:w-7/12 ">
        {" "}
        <Images
          src={`images/png/groupuser.png`}
          alt="Student Img"
          width={780}
          height={780}
        />
      </div>
    </div>
  );
};

export default Register;
