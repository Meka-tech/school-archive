import LandingPageNav from "components/navbar/landing-page-nav";
import React, { useEffect, useState } from "react";
import BannerImg from "../../assets/img/landing-page/archive-new.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdLibraryBooks, MdSearch } from "react-icons/md";
import { Client } from "@notionhq/client";

import { FaBloggerB } from "react-icons/fa";
import Footer from "components/footer/Footer";
import BlogCard from "components/card/BlogCard";
import { BlogCardLoading } from "components/card/BlogCard";
import { IoMdArrowForward } from "react-icons/io";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [blogItem, setBlogItem] = useState([]);
  const [blogLoading, setBlogLoading] = useState(false);

  const GetBlogs = async () => {
    setBlogLoading(true);
    try {
      const response = await axios.get(`${BaseUrl}/blog`);
      setBlogItem(response.data.blogs);
    } catch (e) {
      console.error(e);
    } finally {
      setBlogLoading(false);
    }
  };

  const navigate = useNavigate();

  const SearchSchool = async (e) => {
    e.preventDefault();
    navigate("/schools", { state: { input: searchInput } });
  };

  useEffect(() => {
    GetBlogs();
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white ">
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
            <form className="mt-10 flex h-fit w-full items-center justify-between rounded-lg border-solid border-white bg-white px-2 py-3 shadow-xl duration-100 ease-in xl:mt-10 xl:w-6/12 xl:px-4">
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
      <div className="relative bg-white py-20 xl:py-40">
        <h2
          className="text-center text-3xl font-bold text-[#065f46]  xl:text-4xl"
          data-aos="fade-left"
        >
          Features
        </h2>
        <div className="relative z-10 ml-auto mr-auto mt-24 grid w-9/12 grid-cols-1 items-center justify-center gap-y-8 gap-x-10 xl:grid-cols-3">
          <div
            className="flex h-60 w-full flex-col items-center justify-center rounded-xl bg-white px-4 py-6 shadow-2xl xl:h-full xl:px-6 xl:py-10"
            data-aos="fade-left"
          >
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
          <div
            className="flex h-60 w-full flex-col items-center justify-center rounded-xl bg-white px-4 py-5 shadow-2xl xl:h-full xl:px-6 xl:py-10"
            data-aos="fade-left"
          >
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
          <div
            className=" flex h-60 w-full flex-col items-center justify-center rounded-xl bg-white py-5 px-4 shadow-2xl xl:h-full xl:px-6 xl:py-10"
            data-aos="fade-left"
          >
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
        <div className="absolute bottom-0 left-0 z-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#065f46"
              fill-opacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,48C672,53,768,75,864,112C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative mb-20  flex w-full flex-col bg-[#065f46] pb-20 pt-16 xl:pb-40">
        <h2
          className="text-center text-3xl font-bold text-white  xl:text-4xl"
          data-aos="fade-right"
        >
          Read Latest Blog Posts
        </h2>
        <div
          className=" relative z-10 ml-auto mr-auto mt-24  flex w-10/12  grid-cols-3 flex-col items-center justify-center gap-y-6 xl:grid xl:w-10/12 xl:gap-x-20"
          data-aos="fade-right"
        >
          {blogLoading ? (
            <>
              <BlogCardLoading />
              <BlogCardLoading />
              <BlogCardLoading />
            </>
          ) : !blogLoading && blogItem.length > 0 ? (
            blogItem.map((item, i) => {
              if (i < 3) {
                return <BlogCard data={item} key={i} />;
              }
              return null;
            })
          ) : null}
        </div>
        <div
          className="z-10 mt-10 ml-auto mr-auto flex w-10/12 items-center justify-end text-white   xl:w-9/12   xl:text-[#065f46]"
          data-aos="fade-right"
        >
          <a className="flex" href="/blog">
            <p className="mr-1 text-lg font-extrabold ">More Posts</p>
            <IoMdArrowForward className="text-xl xl:text-2xl " />
          </a>
        </div>
        <div className="absolute left-0 bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="white"
              fill-opacity="1"
              d="M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,234.7C672,256,768,224,864,186.7C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
