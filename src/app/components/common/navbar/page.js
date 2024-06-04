"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingBasket, FaTimes } from "react-icons/fa";
import Images from "../images/page";

const Navbar = () => {
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav class="bg-white border-gray-200 ">
        <div className="flex flex-wrap items-center justify-between p-5">
          <div className="ml-5">
            <Link href="/">
              <Images
                src={`images/png/skillearnifylogo.png`}
                alt="logo Image"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className="text-blueColor font-normal text-sm flex gap-1 items-center">
            <Images
              src={`images/svg/mail.svg`}
              alt="mail img"
              width={15}
              height={15}
            />
            <span>michelle.rivera@example.com</span>
          </div>
          <div className="text-blueColor font-normal text-sm flex gap-1 items-center">
            <Images
              src={`images/svg/phone.svg`}
              alt="phone img"
              width={15}
              height={15}
            />
            <span> (209) 555-0104</span>
          </div>

          <div className="flex items-center flex-wrap gap-5 mr-5">
            <div className="my-2 md:my-0 md:w-auto w-full">
              <select
                id="countries"
                class="bg-transparent border border-blueColor text-blueColor text-sm rounded-lg py-3 px-5"
              >
                <option selected>Indian Rupees - INR</option>
                <option value="US">Pakistani Rupees - PKR</option>
                <option value="US">Pakistani Rupees - PKR</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <div className="md:w-auto w-full">
                <Link
                  href="/register"
                  className="py-2 px-5 rounded-lg text-blueColor border border-blueColor text-center"
                >
                  REGISTER
                </Link>
              </div>
              <div className="md:w-auto w-full">
                <Link
                  href="/login"
                  className="py-2 px-5 text-white rounded-lg bg-gradient-to-r from-blueColor to-[#7F56D9] text-center"
                >
                  SIGNIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-darkBlue text-white flex flex-col sm:flex-row items-center justify-between p-3">
        <button
          onClick={toggleMenu}
          className="block sm:hidden text-xl focus:outline-none"
        >
          {showMenu ? <FaBars /> : <FaBars />}
        </button>
        {/* Menu items */}
        <div
          className={`${
            showMenu ? "flex flex-col sm:flex-row sm:gap-5" : "hidden"
          } ml-5 sm:flex`}
        >
          {/* Home link */}
          <a
            href="#"
            className="text-base m-2 font-medium underline"
            aria-current="page"
          >
            Home
          </a>

          {/* Video Courses link */}
          <a href="#" className="text-base m-2 hover:underline">
            Video Courses
          </a>

          {/* Live Mentor link */}
          <a href="#" className="text-base m-2 hover:underline">
            Live Mentor
          </a>

          {/* Job Portal link */}
          <a href="#" className="text-base m-2 hover:underline">
            Job Portal
          </a>

          {/* Subscription link */}
          <a href="#" className="text-base m-2 hover:underline">
            Subscription
          </a>
        </div>

        {/* Icons and search */}
        <div className="flex items-center sm:ml-auto sm:mr-5 mt-3 sm:mt-0">
          {/* Basket icon */}
          <div className="hidden md:block mr-5">
            <FaShoppingBasket className="text-xl" />
          </div>

          {/* Search bar */}
          <div className="mt-3 sm:mt-0 flex items-center flex-wrap gap-2">
            {/* Inquiry button */}
            <div className="md:w-auto w-full">
              <button className="w-[95%] mx-2 px-5 py-2 bg-white text-blueColor text-center rounded-lg shadow font-medium">
                INQUIRY
              </button>
            </div>
            <form className="md:w-auto w-full">
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full px-5 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute top-1/2 transform -translate-y-1/2 right-1 bg-blueColor focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
