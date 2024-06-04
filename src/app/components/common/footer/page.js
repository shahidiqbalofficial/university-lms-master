import Link from "next/link";
import React from "react";
import Images from "../images/page";

const Footer = () => {
  return (
    <footer class="">
      <div class="bg-[#04042c] pt-24 pb-10 md:flex gap-2 lg:gap-8 px-5 lg:px-16 space-y-8 md:space-y-0 text-white text-sm">
        <div class="w-full md:w-[30%] lg:w-[35%]">
          <div class="text-3xl font-extrabold pb-3">
            <Link href="/">
              <Images
                src={`images/png/skillearnifylogo.png`}
                alt="logo Image"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div class="text-base pb-8">
            Unleash Learning Excellence! Your go-to platform for expert-led
            courses, user-friendly interface, and skill elevation. Start your
            learning journey today!
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <div>
                <Images
                  src={`images/svg/office.svg`}
                  alt="logo Image"
                  width={15}
                  height={15}
                />
              </div>
              <div>463 7th Ave, NY 10018, India</div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <Images
                  src={`images/svg/phoneIcon.svg`}
                  alt="logo Image"
                  width={15}
                  height={15}
                />
              </div>
              <div>+123 88 9900 456</div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-[45%] text-xs md:text-sm flex gap-2">
          <div class="w-1/3">
            <div class="text-white font-bold text-lg">Useful Links</div>
            <hr class="border-2 my-3 border-[#486fe5] w-6 rounded" />
            <ul class="space-y-2">
              <li>Our values</li>
              <li>Our Advisory board</li>
              <li>Our partners</li>
              <li>Become a pertner</li>
              <li>Work at Future Learn</li>
              <li>Quizlet Plus</li>
            </ul>
          </div>
          <div class="w-1/3">
            <div class="text-white font-bold text-lg">Our Company</div>
            <hr class="border-2 my-3 border-[#486fe5] w-6 rounded" />
            <ul class="space-y-2">
              <li>Contact Us</li>
              <li>Become Teacher</li>
              <li>Our partners</li>
              <li>Blog</li>
              <li>Instructor</li>
              <li>Events</li>
            </ul>
          </div>
          <div class="w-1/3">
            <div class="text-white font-bold text-lg">Get In Touch</div>
            <hr class="border-2 my-3 border-[#486fe5] w-6 rounded" />
            <p class="pb-3">
              when an unknown printer took galley type and scrambled
            </p>
            <div class="flex items-center gap-2">
              <div>
                <Images
                  src={`images/svg/facebook.svg`}
                  alt="logo Image"
                  width={8}
                  height={8}
                />
              </div>
              <div>
                <Images
                  src={`images/svg/twitter.svg`}
                  alt="logo Image"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <Images
                  src={`images/svg/whatsapp.svg`}
                  alt="logo Image"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <Images
                  src={`images/svg/instagram.svg`}
                  alt="logo Image"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <Images
                  src={`images/svg/youtube.svg`}
                  alt="logo Image"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center md:items-start  w-full md:w-[25%] lg:w-[20%] ">
          <div class="text-white font-bold text-lg">News Letter</div>
          <hr class="border-2 my-3 border-[#486fe5] w-6 rounded" />
          <p class="pb-5">
            Your gateway to exclusive updates, offers, and educational insights!
          </p>
          <div class="flex items-center pb-3 text-xs ">
            <input
              type="text"
              class="focus:outline-none px-3 py-4 rounded-l text-gray-950 w-full md:w-1/2 lg:w-full"
              placeholder="Email address"
            />
            <div class="bg-[#486fe5] px-3 py-4 rounded-r">Subscribe</div>
          </div>
          <div class="flex items-center md:flex-col lg:flex-row justify-between gap-2">
            <div class="flex items-center gap-2 bg-[#1c1b3b] p-2 rounded-md">
             
              <div>
              <Images
                  src={`images/svg/appleicon.svg`}
                  alt="logo Image"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div class="flex items-center gap-2 bg-[#1c1b3b] p-2 rounded-md">
            <Images
                  src={`images/svg/googleplay.svg`}
                  alt="logo Image"
                  width={150}
                  height={150}
                />
            </div>
          </div>
        </div>
      </div>
      <div class="text-center sm:flex justify-between px-16 py-6 bg-[#1c1c4c] text-gray-200 text-sm">
        <p class="">© 2010-2024 SkillLearnify.com. All rights reserved.</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
