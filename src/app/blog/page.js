"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import BreadCrumb from "../components/common/breadcrumb/page";
import BlogCard from "../components/specialcoursecard/page";
import BlogPageSideBar from "../components/blogsidebar/page";

const Blog = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  // Assuming you have an array of blog items
  const blogItems = [
    { id: 1, title: "Blog 1" },
    { id: 2, title: "Blog 2" },
    { id: 3, title: "Blog 3" },
    { id: 4, title: "Blog 4" },
    { id: 5, title: "Blog 5" },
    { id: 6, title: "Blog 6" },
    { id: 7, title: "Blog 7" },
    { id: 8, title: "Blog 8" },
    { id: 9, title: "Blog 9" },

    // ... add more blog items
  ];

  const pageCount = Math.ceil(blogItems.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = blogItems.slice(startIndex, endIndex);

  return (
    <div>
      <BreadCrumb label="Blogs" />
      <div className="md:flex md:justify-between p-5 items-start">
        <div className="flex justify-center flex-wrap">
          {currentItems.map((blog) => (
            <BlogCard key={blog.id} />
          ))}
        </div>
        <div>
          <BlogPageSideBar />
        </div>
      </div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination flex justify-center mt-4"}
        previousClassName={
          "pagination__prev  px-4 py-2 rounded-full bg-grayColor text-white"
        }
        nextClassName={
          "pagination__next px-4 py-2 rounded-full bg-grayColor text-white"
        }
        pageClassName={
          "pagination__page mx-2 px-4 py-2 rounded-full bg-grayColor text-white"
        }
        activeClassName={"bg-indigo-500 "}
      />
    </div>
  );
};

export default Blog;
