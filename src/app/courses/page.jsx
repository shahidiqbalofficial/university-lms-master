"use client";
import React from "react";
import { useState, useEffect } from "react";

import TopSlider from "../components/courses/topslider";
import Usefullinks from "../components/courses/usefullinks";
import CardSlider from "../components/courses/cardslider";
import SlideCard from "../components/courses/slidecard";
import Bannercard from "../components/courses/bannercard";
import { FaSortUp } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import TopCarasol from "../components/courses/topcarasol";
import data from "../../../data";
import Levelcheckbox from "../components/courses/filters/levelcheckbox";
import Languagecheckbox from "../components/courses/filters/languagecheckbox";
import Catagorycheckbox from "../components/courses/filters/catagorycheckbox";
import DeliveryTimeRadio from "../components/courses/filters/delivarytimeradio";
import Pricing from "../components/courses/filters/pricing";

function Page() {
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState([]);
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState("");
  const [fulldata, setFulldata] = useState(data);
  const [rangeValue, setRangeValue] = useState(8000);
  const [searchData, setSearchData] = useState(data);
  const [check, setCheck] = useState(false);
  const [statesort, setStateSort] = useState("");
  const [sorteddate, setSortedDate] = useState([]);
  const [sortedprice, setSortedPrice] = useState([]);

  // react pagination
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // handle search data
  const handleSearchdata = (e) => {
    console.log(e);
    setSearchData(e);
    console.log(searchData);
  };

  const handlecheck = (e) => {
    setCheck(e);
  };

  const calculateRange = (e) => {
    handlecheck(false);
    setRangeValue(e);
  };

  const handleLevelChange = (e) => {
    handlecheck(false);
    const level = e.target.value;
    console.log(level);
    console.log(rangeValue);
    if (e.target.checked) {
      setSelectedLevel([...selectedLevel, level]);
    } else {
      setSelectedLevel(selectedLevel.filter((r) => r !== level));
    }
  };

  //language onhanlde change
  const handleLanguageChange = (e) => {
    handlecheck(false);
    const language = e.target.value;
    console.log(language);
    if (e.target.checked) {
      setSelectedLanguage([...selectedLanguage, language]);
    } else {
      setSelectedLanguage(selectedLanguage.filter((r) => r !== language));
    }
  };

  //Catagory onhanlde change
  const handleCatagoryChange = (e) => {
    handlecheck(false);
    const catagory = e.target.value;
    console.log(catagory);
    if (e.target.checked) {
      setSelectedCatagory([...selectedCatagory, catagory]);
    } else {
      setSelectedCatagory(selectedCatagory.filter((r) => r !== catagory));
    }
  };

  //delivary time onhanlde
  const handleDeliveryTimeChange = (e) => {
    handlecheck(false);
    const deliveryTime = e.target.value;
    setSelectedDeliveryTime(deliveryTime);
  };

  const filteredResults = data.filter((item) => {
    const levelMatch =
      selectedLevel.length === 0 || selectedLevel.includes(item.level);
    const languageMatch =
      selectedLanguage.length === 0 || selectedLanguage.includes(item.language);
    const catagoryMatch =
      selectedCatagory.length === 0 || selectedCatagory.includes(item.category);
    const deliveryTimeMatch =
      selectedDeliveryTime === "" ||
      item.delivery_time === selectedDeliveryTime;

    const RangeMatch = setRangeValue === 0 || item.budget <= rangeValue;

    return (
      levelMatch &&
      languageMatch &&
      catagoryMatch &&
      deliveryTimeMatch &&
      RangeMatch
    );
  });

  //sorting handle
  // Function to handle sorting by date
  const sortByDate = () => {
    const sortedCourses = [...searchData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    handleSearchdata(sortedCourses);
    handlecheck(true);
  };

  useEffect(() => {
    handlecheck(true);
  }, [searchData]);

  // Function to handle sorting by budget
  const sortByBudget = () => {
    const sortedCourses = [...searchData].sort((a, b) => a.budget - b.budget);
    handleSearchdata(sortedCourses);
    handlecheck(true);
  };

  const pageSize = 9;
  const pageCount = Math.ceil(filteredResults.length / pageSize);

  const offset = currentPage * pageSize;
  const currentPageData = filteredResults.slice(offset, offset + pageSize);
  

  // Pagination for searchData
  const searchPageSize = 9;
  const searchPageCount = Math.ceil(searchData.length / searchPageSize);

  const searchOffset = currentPage * searchPageSize;
  const currentSearchPageData = searchData.slice(
    searchOffset,
    searchOffset + searchPageSize
  );

  return (
    <div>
      {/* <TopCarasol /> */}
      <TopSlider
        setSearchData={handleSearchdata}
        searchData={searchData}
        setcheck={handlecheck}
        check={check}
      />
      <Usefullinks />
      <div className="my-10 mx-auto w-80 md:w-10/12 ">
        <CardSlider />
      </div>
      <div className="w-10/12 mx-auto my-4 flex flex-wrap lg:flex-nowrap justify-center md:justify-between gap-8">
        <div className="left-filter w-60 ">
          {/* delivery time */}
          <div className="flex items-center justify-between">
            {/* top section */}
            <h1 className="text-sm font-[600]">Delivary Time</h1>
            <FaSortUp />
          </div>
          {Array.from(new Set(data.map((item) => item.delivery_time))).map(
            (time) => (
              <DeliveryTimeRadio
                deliveryTime={time}
                checked={selectedDeliveryTime === time}
                onChange={handleDeliveryTimeChange}
              />
            )
          )}

          {/* bughet filter */}
          <div>
            <div className="flex items-center justify-between">
              {/* top section */}
              <h1 className="text-sm font-[600]">Bughet</h1>
              <FaSortUp />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-xs">Min Price</p>
                <p className="border py-[6px] px-2 rounded-md w-20 text-xs font-[600]">
                  $3000
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs">Max Price</p>
                <p className="border py-[6px] px-2 rounded-md w-20 text-xs font-[600]">
                  $8000
                </p>
              </div>
            </div>
            <div>
              <Pricing setrange={calculateRange} rangeValue={rangeValue} />
            </div>
          </div>
          {/* filter by level by levels */}
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-[600]">Level</h1>
              <FaSortUp />
            </div>
            {/* options */}
            {Array.from(new Set(data.map((item) => item.level))).map(
              (level) => (
                <Levelcheckbox
                  key={level}
                  level={level}
                  checked={selectedLevel.includes(level)}
                  onChange={handleLevelChange}
                />
              )
            )}
          </div>
          {/* Filter by language */}
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-[600]">Language</h1>
              <FaSortUp />
            </div>
            {/* options */}
            {Array.from(new Set(data.map((item) => item.language))).map(
              (language) => (
                <Languagecheckbox
                  key={language}
                  language={language}
                  checked={selectedLanguage.includes(language)}
                  onChange={handleLanguageChange}
                />
              )
            )}
          </div>

          {/* Filter by Catagory */}
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-[600]">Catagory</h1>
              <FaSortUp />
            </div>
            {/* options */}
            {Array.from(new Set(data.map((item) => item.category))).map(
              (catagory) => (
                <Catagorycheckbox
                  key={catagory}
                  catagory={catagory}
                  checked={selectedCatagory.includes(catagory)}
                  onChange={handleCatagoryChange}
                />
              )
            )}
          </div>
        </div>
        <div className="cards flex-1">
          <div className="flex items-center justify-between">
            <p className="text-xs">
              {check ? searchData.length : filteredResults.length} service
              available
            </p>

            {/* sort drop down */}
            <div className="text-xs">
              <label htmlFor="sort">Best Sort </label>
              <select
                className="bg-transparent outline-none "
                id="sort"
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  if (selectedValue === "date") {
                    sortByDate();
                  } else if (selectedValue === "budget") {
                    sortByBudget();
                  }
                }}
              >
                <option value="date">Date</option>
                <option value="budget">Budget</option>
              </select>
            </div>
          </div>

          {/* ---pagination started */}
          <div className="flex items-center flex-wrap justify-center md:justify-between gap-4 my-4">
            {check ? (
              currentSearchPageData.length === 0 ? (
                <div className="flex items-center justify-center my-2 font-bold text-red-400">
                  {" "}
                  <h1 className="text-center">No items found</h1>{" "}
                </div>
              ) : (
                currentSearchPageData.map((item, index) => (
                  <Bannercard
                    key={index}
                    review={item.review}
                    rating={item.rating}
                    price={item.budget}
                  />
                ))
              )
            ) : currentPageData.length === 0 ? (
              <div className="flex items-center justify-center my-2 font-bold text-red-400">
                {" "}
                <h1 className="text-center">No items found</h1>{" "}
              </div>
            ) : (
              currentPageData.map((item, index) => (
                <Bannercard
                  key={index}
                  review={item.review}
                  rating={item.rating}
                  price={item.budget}
                />
              ))
            )}
          </div>
          {/* Pagination */}
          <ReactPaginate
            previousLabel={"<"}
            previousClassName={`${currentPageData.length==0 ||currentSearchPageData.length ==0 ?`hidden`:`block`} border h-8 w-8 rounded-full flex items-center justify-center`}
            nextLabel={">"}
            nextClassName={`${currentPageData.length==0 || currentSearchPageData.length ==0?`hidden`:`block`} border h-8 w-8 rounded-full flex items-center justify-center border-black`}
            breakLabel={"..."}
            breakClassName={"break-me "}
            pageCount={check ? searchPageCount : pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex items-center justify-center gap-4 text-xs"}
            activeClassName={"active h-8 flex items-center justify-center w-8 bg-blue-400 rounded-full"}
          />
          {/* pagination ended */}
        </div>
      </div>
    </div>
  );
}

export default Page;
