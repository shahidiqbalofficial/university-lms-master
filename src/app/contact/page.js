import React from "react";
import BreadCrumb from "../components/common/breadcrumb/page";

const Contact = () => {
  return (
    <div>
      <BreadCrumb label="Contact us" />
      <div className="p-5">
        <div className="lg:flex lg:p-5 lg:gap-5">
          <div className="w-full p-5">
            <div className="text-center text-lg text-grayColor font-bold mb-2">
              Get In Touch
            </div>
            <div className="text-center text-base text-grayColor mb-5 md:mb-[35px]">
              Our dedicated staff is eager to receive your feedback.
            </div>
            <form className="mb-4">
              <div className="mb-2 md:flex md:gap-2">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <label
                    htmlFor="fName"
                    className="text-sm text-grayColor font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <label
                    htmlFor="fName"
                    className="text-sm text-grayColor font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-sm text-grayColor font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="John@doe.com"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNo"
                  className="text-sm text-grayColor font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+92 312 5445614"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="text-sm text-grayColor font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="4"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4  p-2 border border-gray-400 rounded-lg focus:outline-none"
                />
                <label
                  for="default-checkbox"
                  className="text-sm text-gray-400 mx-3"
                >
                  You agree to our Friendly{" "}
                  <span className="text-blueColor">Privacy Policy</span>
                </label>
              </div>
              <div className="mb-4">
                <button className="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none shadow-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
