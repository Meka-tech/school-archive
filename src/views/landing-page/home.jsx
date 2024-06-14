import LandingPageNav from "components/navbar/landing-page-nav";
import React, { useEffect, useState } from "react";
import BannerImg from "../../assets/img/landing-page/archive-new.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdLibraryBooks, MdSearch } from "react-icons/md";

import { FaBloggerB } from "react-icons/fa";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const SearchSchool = async (e) => {
    e.preventDefault();
    navigate("/search-school", { state: { input: searchInput } });
  };

  return (
    <main className="h-screen w-full bg-white">
      <LandingPageNav />
      <div className="relative flex h-[650px] w-full xl:h-[600px]">
        <div className="absolute top-0 flex  h-full w-full  bg-[#022c22]">
          <img
            src={BannerImg}
            alt="Banner"
            className="absolute top-0 h-full w-full object-cover opacity-30"
          />
          <div className="z-10 flex h-full w-full flex-col  justify-center px-5 xl:h-full xl:px-20">
            <div className="xl:w-1/2">
              <h1 className="mb-5 text-left text-4xl font-extrabold capitalize text-white xl:mb-10 xl:text-6xl ">
                Welcome to Idah's <br /> schools{" "}
                <span className=" text-green-500">Archive</span>
              </h1>

              <p className="text-left text-xl text-white xl:text-2xl">
                Effortlessly explore an extensive collection of schools,
                sessions, terms, and student data with our powerful,
                user-friendly system designed for comprehensive school
                administration.
              </p>
            </div>
            <form className="mt-10 flex h-fit w-full items-center justify-between rounded-lg border-solid border-white bg-white px-2 py-3 shadow-xl duration-100 ease-in xl:mt-10 xl:w-6/12 xl:px-4  ">
              <input
                placeholder="Search Schools..."
                className=" ml-1 w-11/12 text-sm placeholder:text-gray-400  xl:ml-2  xl:text-lg"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                type="submit"
                className="cursor-pointer rounded-lg px-2 duration-100 ease-in"
                onClick={SearchSchool}
                disabled={searchInput.length < 1}
              >
                <MdSearch className=" text-gray-500" size={25} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-24">
        <h2 className="text-center text-3xl font-bold  xl:text-4xl">
          Features
        </h2>
        <div className="ml-auto mr-auto mt-16 grid w-9/12 grid-cols-1 items-center justify-center gap-y-8 gap-x-10 xl:grid-cols-3 ">
          <div className="flex h-60 w-full flex-col items-center justify-center rounded-xl bg-white px-4 py-6 shadow-2xl xl:h-full xl:px-6 xl:py-10">
            <div className="mb-2 flex items-center justify-center rounded-full bg-[#d1fae5] p-2 xl:mb-5">
              <MdSearch size={25} className="text-[#10b981]" />
            </div>
            <p className="mb-2 text-center text-xl font-semibold">
              Explore Schools
            </p>
            <p className="text-center">
              Access detailed information and historical data of schools. Use
              advanced filters to find schools by name, location, or unique
              identifier efficiently.
            </p>
          </div>
          <div className="flex h-60 w-full flex-col items-center justify-center rounded-xl bg-white px-4 py-5 shadow-2xl xl:h-full xl:px-6 xl:py-10">
            <div className="mb-2 flex items-center justify-center rounded-full bg-[#cffafe] p-2 xl:mb-5">
              <MdLibraryBooks size={25} className="text-[#06b6d4]" />
            </div>
            <p className="mb-2 text-center text-xl font-semibold">
              Detailed Information Access
            </p>
            <p className="text-center">
              View detailed Information of all sessions , terms, student data,
              staff data and lots more of a schools
            </p>
          </div>
          <div className=" flex h-60 w-full flex-col items-center justify-center rounded-xl bg-white py-5 px-4 shadow-2xl xl:h-full xl:px-6 xl:py-10">
            <div className="mb-2 flex items-center justify-center rounded-full bg-[#ffe4e6] p-2 xl:mb-5">
              <FaBloggerB size={25} className="text-[#f43f5e]" />
            </div>
            <p className="mb-2 text-center text-xl font-semibold">
              Blog System
            </p>
            <p className="text-center">
              An integrated blog system will allow users to read and engage with
              posts, fostering communication and community engagement
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
