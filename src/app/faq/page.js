"use client";
import React, { useState } from "react";
import Head from "next/head";
import BreadCrumb from "../components/common/breadcrumb/page";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      show: true,
      question: "How can I access your free courses?",
      answer:
        "To access our free courses, simply visit our website and navigate to the 'Courses' section. Browse through the available free courses and click on the one you're interested in. You can start learning immediately without the need for any payment or registration.",
    },
    {
      id: 2,
      show: false,
      question: "How do I enroll in a paid course?",
      answer:
        "Enrolling in a paid course is easy. Visit our website, go to the 'Courses' page, and select the paid course you want to enroll in. Click on the 'Enroll' or 'Buy Now' button, follow the prompts to make the payment, and you'll gain immediate access to the course materials.",
    },
    {
      id: 3,
      show: false,
      question: "What payment methods do you accept for course purchases?",
      answer:
        "We accept a variety of payment methods, including credit/debit cards and other secure online payment options. During the checkout process for a paid course, you'll be able to choose your preferred payment method and complete the transaction securely.",
    },
    {
      id: 4,
      show: false,
      question: "Is there any refund policy for paid courses?",
      answer:
        "Yes, we have a refund policy in place for our paid courses. If you're not satisfied with a course and wish to request a refund, please contact our support team within [specified time period]. We'll review your request and process the refund according to our refund policy terms.",
    },
    {
      id: 5,
      show: false,
      question: "Can I access course materials offline?",
      answer:
        "Currently, we do not offer offline access to course materials. To benefit from our courses, you'll need a stable internet connection to access the content online. We are constantly working on enhancing our platform, so stay tuned for any updates regarding offline access in the future.",
    },
    {
      id: 6,
      show: false,
      question: "Are there any prerequisites for enrolling in advanced courses?",
      answer:
        "Prerequisites vary for each course. Check the course description on our website to find information about any prerequisites or recommended background knowledge. If you have specific questions about course requirements, feel free to reach out to our support team for assistance.",
    },
  ]);
  

  const toggleFaq = (id) => {
    setFaqs(
      faqs.map((faq) => (faq.id === id ? { ...faq, show: !faq.show } : faq))
    );
  };

  return (
    <>
      <Head>
        <title>Skillearnify FAQ - Frequently Asked Questions</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about SnipByte, coding templates, and our services. Get the information you need to enhance your coding experience."
        />
        <meta
          name="keywords"
          content="SnipByte, FAQ, frequently asked questions, coding templates, coding services, coding experience"
        />
        {/* Add more meta tags as needed */}
      </Head>
      <div className="bg-white ">
        <div className="p-5 text-center mx-auto  text-grayColor">
          <BreadCrumb label="Frequently asked questions" />

          <div
            id="accordion-collapse"
            className="md:text-left text-center border border-gray-200 rounded "
            data-accordion="collapse"
          >
            {faqs.map((faq) => (
              <div key={faq.id}>
                <h2 id={`accordion-collapse-heading-${faq.id}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200
                focus:outline-none hover:bg-lightCard "
                    data-accordion-target={`#accordion-collapse-body-${faq.id}`}
                    aria-expanded={faq.show ? "true" : "false"}
                    aria-controls={`accordion-collapse-body-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      data-accordion-icon
                      className={`w-6 h-6 ${
                        faq.show ? "rotate-180" : ""
                      } shrink-0`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-collapse-body-${faq.id}`}
                  className={`${faq.show ? "" : "hidden"}`}
                  aria-labelledby={`accordion-collapse-heading-${faq.id}`}
                >
                  <div className="p-5 border border-b-0 border-gray-200  bg-lightCard">
                    <p className="mb-2 text-gray-500 ">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
