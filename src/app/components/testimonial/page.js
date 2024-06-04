import React from "react";
import Images from "../common/images/page";
import TestimonialCard from "../common/testimonialcard/page";

const Testimonial = (props) => {
  return (
    <div className="lg:relative ">
      <div className="hidden lg:block absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="/images/png/map.png"
          alt="Background"
        />
      </div>
      <div className="bg-darkBlue  relative z-10 bg-opacity-90 h-full lg:h-[350px]">
        <div className="w-full md:w-1/2 lg:w-4/12 p-5">
          <div className="flex gap-2 items-center my-4">
            <div className="text-2xl md:text-3xl text-white ">
              2500+ Happy Students
            </div>
            <Images
              src={`images/png/happy.png`}
              alt="happy icon"
              width={20}
              height={20}
            />
          </div>
          <div className="text-sm text-white my-4">
            Borem ipsum dolor sit amet, consectetur adipiscing eliawe awut elit
            ellus, luctus nec ullamcorper mattisBorem ipsum dolor awes atnse
            awctetur. Borem ipsum dolor sit amet, consectetur adipiscing eliawe
            awut elit ellus.
          </div>
        </div>
        <div className=" bg-transparent lg:p-0 p-2 flex flex-wrap justify-center gap-5 w-full  lg:absolute lg:bottom-[-45%]">
          <TestimonialCard
            imgUrl="circleuser1.png"
            title="A Game-Changer in Education!"
            desc="This e-learning platform is a true game-changer. The content is comprehensive, the interface is user-friendly, and the support team is fantastic. It's making my learning journey both enjoyable and efficient. Highly recommended!"
            studentName="STUDENT NAME"
            desigination="Web Designer, Germany"
          />

          <TestimonialCard
            imgUrl="circleuser4.png"
            title="Exceptional Learning Experience"
            desc="I'm thoroughly impressed with this e-learning platform. The lessons are well-structured, the instructors are knowledgeable, and the interactive features keep me engaged. The flexibility to learn at my own pace is invaluable. "
            studentName="STUDENT NAME"
            desigination="Web Designer, Germany"
          />

          <TestimonialCard
            imgUrl="circleuser5.png"
            title="User-Friendly and Effective"
            desc="I appreciate the simplicity of this e-learning platform. Navigating through the courses is a breeze, and the content is presented in a way that's easy to understand. The platform's effectiveness in delivering quality education is evident."
            studentName="STUDENT NAME"
            desigination="Web Designer, Germany"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
