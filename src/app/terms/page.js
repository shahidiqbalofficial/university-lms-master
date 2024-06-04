import React from "react";
import BreadCrumb from "../components/common/breadcrumb/page";

const Terms = () => {
  const privacyPolicySections = [
    {
      heading: "Section 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      heading: "Section 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "Section 3",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      heading: "Section 4",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      heading: "Section 5",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      heading: "Section 6",
      content:
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
    },
    {
      heading: "Section 7",
      content:
        "Integer ac ligula accumsan, placerat libero eu, sagittis libero.",
    },
    {
      heading: "Section 8",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      heading: "Section 9",
      content: "Fusce non diam vel ex vehicula varius vitae nec elit.",
    },
    {
      heading: "Section 10",
      content: "Vivamus quis arcu et mi euismod varius eu in tortor.",
    },
  ];

  return (
    <div className="bg-white">
      <BreadCrumb label="Terms" />
      <div className="p-5 ">
        {privacyPolicySections.map((section, index) => (
          <div key={index} className="mb-3">
            <h2 className="text-grayColor md:text-2xl text-xl mb-2 font-bold">
              {section.heading}
            </h2>
            <p className="text-base text-grayColor">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
