"use client";
import React from "react";
import CourseCard from "./components/common/coursecard/page";
import Navbar from "./components/common/navbar/page";
import HeroSection from "./components/herosection/page";
import NewsLatter from "./components/newslatter/page";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonial from "./components/testimonial/page";
import Footer from "./components/common/footer/page";
import {
  FaBicycle,
  FaBook,
  FaBriefcase,
  FaCar,
  FaFilm,
  FaGamepad,
  FaGlobe,
  FaHeart,
  FaHome,
  FaLaptop,
  FaMusic,
  FaPaintBrush,
  FaPlane,
  FaRunning,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";
import Category from "./components/categories/page";
import Images from "./components/common/images/page";
import CertificateCard from "./components/certificatecard/page";
import JobCard from "./components/jobcard/page";
import SpecialCourseCard from "./components/specialcoursecard/page";
import BlogCard from "./components/common/blogcard/page";

export default function Home() {
  const courses = [
    {
      title: "The Data Science Course 2023: Complete Data Science",
      price: 320,
      imagePath: "course.png",
    },
    {
      title: "The Data Science Course 2023: Complete Data Science",
      price: 160,
      imagePath: "course1.png",
    },
    {
      title: "The Data Science Course 2023: Complete Data Science",
      price: 545,
      imagePath: "course2.png",
    },
    // Add more course objects as needed
  ];
  const topRatedCourses = [
    {
      title: "The Data Science Course 2023: Complete Data Science",
      price: 320,
      imagePath: "course.png",
    },
    {
      title: "The Data Science Course 2023: Complete Data Science",
      price: 160,
      imagePath: "course1.png",
    },
    {
      title: "The Data Science Course 2023: Complete Data Science",
      price: 545,
      imagePath: "course2.png",
    },
    {
      title: "The Data Science Course 2023: Complete Data Science",
      price: 545,
      imagePath: "course.png",
    },
    {
      title: "The Data Science Course 2023: Complete Data Science",
      price: 545,
      imagePath: "course1.png",
    },
    {
      title: "The Data Science Course 2023: Complete Data Science",
      price: 545,
      imagePath: "course2.png",
    },
    {
      title: "The Data Science Course 2023: Complete Data Science",
      price: 545,
      imagePath: "course.png",
    },
    {
      title: "The Data Science Course 2023: Complete Data Science",
      price: 545,
      imagePath: "course1.png",
    },

    // Add more course objects as needed
  ];
  // topCertificates
  const topCertificates = [
    {
      courses: "32 courses",
      imageUrl: "certificate.png",
    },
    {
      courses: "20 courses",
      imageUrl: "certificate1.png",
    },

    {
      courses: "19 courses",
      imageUrl: "certificate3.png",
    },
    {
      courses: "19 courses",
      imageUrl: "certificate4.png",
    },
    {
      courses: "19 courses",
      imageUrl: "certificate5.png",
    },
    {
      courses: "19 courses",
      imageUrl: "certificate6.png",
    },

    // Add more course objects as needed
  ];
  const specialCourses = [
    {
      title: "Enriched Content Modules:",
      desc: "Uncover additional insights and knowledge through specially designed supplementary modules within each course.",
      imagePath: "blogimg1.png",
    },
    {
      title: "Enriched Content Modules:",
      desc: "Uncover additional insights and knowledge through specially designed supplementary modules within each course.",
      imagePath: "blogimg2.png",
    },
    {
      title: "Enriched Content Modules:",
      desc: "Uncover additional insights and knowledge through specially designed supplementary modules within each course.",
      imagePath: "blogimg3.png",
    },

    // Add more course objects as needed
  ];

  // for categories
  const topCategories = [
    {
      label: "Graphic Design",
      icon: "category.svg",
      courses: "19 courses",
    },
    {
      label: "Graphic Design",
      icon: "category.svg",
      courses: "20 courses",
    },
    {
      label: "Shopping",
      icon: "category.svg",
      courses: "20 courses",
    },
    {
      label: "Books",
      icon: "category.svg",
      courses: "20 courses",
    },

    {
      label: "World",
      icon: "category.svg",
      courses: "20 courses",
    },
    {
      label: "Cycling",
      icon: "category.svg",
      courses: "20 courses",
    },
    {
      label: "Cycling",
      icon: "category.svg",
      courses: "20 courses",
    },
  ];

  //for blogs
  const blogPosts = [
    {
      title: "Enriched Content Modules:",

      imagePath: "blogimg2.png",
      category: "education",
    },
    {
      title: "Enriched Content Modules:",

      imagePath: "blogimg3.png",
      category: "education",
    },

    {
      title: "Enriched Content Modules:",

      imagePath: "blogimg3.png",
      category: "education",
    },

    // Add more course objects as needed
  ];

  // for categories
  const topJobs = [
    {
      time: "2 Days Ago",
      jobType: "Full Time",
      icon: "google.png",
      location: "Google , New York",
      title: "Sr. Product Designer",
      desc: "It is a long established fact that a reader of a page when looking at its layout.",
    },
    {
      time: "2 Days Ago",
      jobType: "Full Time",
      icon: "amazon.png",
      location: "amazon , California",
      title: "Web Designer",
      desc: "It is a long established fact that a reader of a page when looking at its layout.",
    },
    {
      time: "2 Days Ago",
      jobType: "Full Time",
      icon: "amazon.png",
      location: "Microsoft , California",
      title: "Web Designer",
      desc: "It is a long established fact that a reader of a page when looking at its layout.",
    },
    {
      time: "2 Days Ago",
      jobType: "Full Time",
      icon: "dropbox.png",
      location: "Amazon , Southfield",
      title: "IT Management",
      desc: "It is a long established fact that a reader of a page when looking at its layout.",
    },
    {
      time: "2 Days Ago",
      jobType: "Full Time",
      icon: "adobe.png",
      location: "Adobe , California",
      title: "IT Management",
      desc: "It is a long established fact that a reader of a page when looking at its layout.",
    },
    {
      time: "2 Days Ago",
      jobType: "Full Time",
      icon: "github.png",
      location: "Github , Southfield",
      title: "Sr. Product Designer",
      desc: "It is a long established fact that a reader of a page when looking at its layout.",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <HeroSection />
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-5 justify-center lg:my-[50px]">
          <div className="p-3 w-full md:w-[250px] ">
            <div className="text-2xl md:text-3xl font-bold text-darkBlue relative mb-4">
              Most Popular <br />{" "}
              <span className="text-blueColor"> Courses</span>
              <div className="absolute bottom-[-5px] left-5">
                <Images
                  src={`images/svg/curve.svg`}
                  alt="Curve Line"
                  width={130}
                  height={130}
                />
              </div>
            </div>
            <div className="text-gray-500 text-sm font-normal my-5">
              Turn aspirations into reality with Skillearnify – your partner in
              achieving goals."
            </div>
            <div className="my-5">
              <button className="text-white bg-blueColor text-center py-2 px-5 rounded-lg">
                View All
              </button>
            </div>
          </div>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              price={course.price}
              imagePath={course.imagePath}
            />
          ))}
        </div>

        <div className="my-5">
          <div className="text-2xl md:text-3xl font-bold text-darkBlue text-center lg:my-[50px]">
            Like the courses{" "}
            <span className="text-blueColor"> you've seen</span>
          </div>
          <div className="">
            <Carousel
              responsive={responsive}
              swipeable
              draggable
              infinite
              autoPlay={false}
              keyBoardControl
              customTransition="transform 300ms ease-in-out"
              transitionDuration={300}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {topRatedCourses.map((course, index) => (
                <div key={index}>
                  <CourseCard
                    title={course.title}
                    price={course.price}
                    imagePath={course.imagePath}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="my-5">
          <div className="text-2xl md:text-3xl font-bold text-darkBlue text-center mb-3 lg:my-[50px]">
            Courses with <span className="text-blueColor"> supplementary </span>
            bonuses
          </div>
          <div className="flex flex-wrap gap-2 justify-around">
            {specialCourses.map((course, index) => (
              <div className=" flex items-center justify-center">
                <SpecialCourseCard
                  key={index}
                  title={course.title}
                  desc={course.desc}
                  imagePath={course.imagePath}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-5">
        <NewsLatter />
      </div>
      <div className="p-5">
        <div className="my-5 p-5">
          <div className="flex flex-wrap justify-between p-5">
            <div className="w-full md:w-4/12 my-5">
              <div className="text-blueColor text-sm font-medium my-3 mt-5">
                <span className="bg-lightCard p-2 ">
                  {" "}
                  Unique online courses
                </span>
              </div>
              <div className="text-xl md:text-3xl text-darkBlue font-bold my-5">
                Browse By Categories
              </div>
              <div className="text-gray-800 text-sm font-normal my-5">
                Borem ipsum dolor sit amet, consectetur adipiscing eliawe awut
                elit ellus, luctus nec ullamcorper mattisBorem ipsum dolor awes
                atnse awctetur. Borem ipsum dolor sit amet, consectetur
                adipiscing eliawe awut elit ellus, luctus nec ullamcorper
                mattisBorem ipsum dolor awes atnse awctetur.
              </div>
              <div className="mt-5">
                {" "}
                <button className="text-sm font-normal px-4 py-2 border border-blueColor text-blueColor">
                  ALL CATEGORIES{" "}
                </button>
              </div>
            </div>
            <div className="w-full md:w-8/12">
              <div className="my-4 flex flex-wrap justify-center gap-5 items-center ">
                {topCategories.slice(0, 3).map((category, index) => (
                  <Category
                    key={index}
                    icon={category.icon}
                    label={category.label}
                    courses={category.courses}
                  />
                ))}
              </div>
              <div className="my-4 flex flex-wrap justify-center gap-5 items-center">
                {topCategories.slice(3, 7).map((category, index) => (
                  <Category
                    key={index}
                    icon={category.icon}
                    label={category.label}
                    courses={category.courses}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 relative">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/6238226/pexels-photo-6238226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Background"
          />
        </div>
        <div className="mt-5 bg-darkBlue p-5  relative z-10 opacity-90">
          <div className="my-5 font-bold  text-white text-xl md:text-3xl text-center">
            Certify your skills
          </div>
          <div className="p-5 flex flex-wrap gap-5 justify-center">
            {topCertificates.map((certificate, index) => (
              <CertificateCard
                key={index}
                courses={certificate.courses}
                imageUrl={certificate.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-lightCard p-5">
        <div className="flex justify-between p-5 lg:mx-[90px]">
          <div>
            <div className="text-blueColor text-sm font-normal mb-2">
              Latest Job
            </div>
            <div className="text-xl md:text-3xl font-bold mb-2">
              New Job Offer
            </div>
            <div className="text-sm font-normal mb-2">
              More Than +500 Job Offer Everyday
            </div>
          </div>
          <div>
            <button className="py-2 px-4 text-center rounded-lg bg-blueColor text-white">
              Post a Job
            </button>
          </div>
        </div>
        <div className="p-5 flex flex-wrap gap-5 justify-center">
          {topJobs.map((job, index) => (
            <JobCard
              key={index}
              time={job.time}
              icon={job.icon}
              jobType={job.jobType}
              location={job.location}
              title={job.title}
              desc={job.desc}
            />
          ))}
        </div>
        <div className="my-5 flex justify-center">
          <button className=" py-2 px-5 text-lg text-center rounded-lg bg-blueColor text-white">
            Load More
          </button>
        </div>
      </div>
      <div className="">
        <Testimonial />
      </div>
      <div className=" my-0 ">
        <div className="relative">
          <div className="hidden md:block absolute bottom-[90px] right-0">
            <Images
              src={`images/svg/orangehalfcircle.svg`}
              alt="Curve Line"
              width={30}
              height={30}
            />
          </div>
          <div className="hidden md:block absolute top-[300px] left-[-10px]">
            <Images
              src={`images/svg/halfstar.svg`}
              alt="half star"
              width={30}
              height={30}
            />
          </div>
          <div className="hidden md:block absolute top-[170px] left-[70px]">
            <Images
              src={`images/png/lines.png`}
              alt="half star"
              width={50}
              height={50}
            />
          </div>
          <div className="hidden md:block absolute top-[-65px] left-[50%]">
            <Images
              src={`images/svg/orangestar.svg`}
              alt="half star"
              width={50}
              height={50}
            />
          </div>

          <div className="my-5">
            {" "}
            <div className="my-5 lg:mt-[200px] text-center text-sm text-blueColor mx-auto">
              <span className="bg-blue-200 p-2 rounded-lg">
                {" "}
                Always Smart To Hear News{" "}
              </span>
            </div>
            <div className="my-3 text-center text-lg lg:text-3xl font-bold text-darkBlue">
              <span>Latest </span>
              <span className="text-blueColor">News</span>
              <span> & Blog</span>
            </div>
            <div className="my-3 md:text-sm text-xs text-center w-full md:w-1/2 mx-auto text-gray-500 font-light">
              Receive huge benefits with our lifetime Plumbing Receive huge
              benefits with our lifetime Plumbing email address will be shown
            </div>
            <div className="my-[60px] flex flex-wrap gap-2 justify-center">
              {blogPosts.map((course, index) => (
                <div className="flex items-center justify-center">
                  <BlogCard
                    key={index}
                    title={course.title}
                    category={course.category}
                    imagePath={course.imagePath}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bottom-[-7%] lg:absolute bg-blueColor text-white p-5 md:w-4/5 w-full mx-auto">
              <div className="flex justify-between flex-wrap items-center">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white flex items-center justify-center">
                    <Images
                      src={`images/svg/extraicon1.svg`}
                      alt=" icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">25k+</div>
                    <div className="text-xs font-light text-white">
                      Successfully Trained
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white flex items-center justify-center">
                    <Images
                      src={`images/svg/extraicon2.svg`}
                      alt=" icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">100k+</div>
                    <div className="text-xs font-light text-white">
                      Classes Completed
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white flex items-center justify-center">
                    <Images
                      src={`images/svg/extraicon3.svg`}
                      alt=" icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">22k+</div>
                    <div className="text-xs font-light text-white">
                      Satisfaction Rate
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white flex items-center justify-center">
                    <Images
                      src={`images/svg/extraicon4.svg`}
                      alt=" icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">25k+</div>
                    <div className="text-xs font-light text-white">
                      Students Community
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
