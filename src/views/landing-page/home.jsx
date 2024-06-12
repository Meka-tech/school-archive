import LandingPageNav from "components/navbar/landing-page-nav";
import React, { useEffect, useState } from "react";
import StorageImg from "../../assets/img/landing-page/file-storage.png";
import BannerImg from "../../assets/img/landing-page/archive-new.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdClear, MdSearch, MdSearchOff } from "react-icons/md";
import { Spinner } from "flowbite-react";
import SchoolCard from "components/card/SchoolCard";
import ResponsivePagination from "react-responsive-pagination";

const Home = () => {
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const navigate = useNavigate();

  const GetAllSchools = async () => {
    setSearching(true);
    try {
      const res = await axios.get(
        `${BaseUrl}/school?page=${currentPage}&limit=12`
      );
      setSearched(false);
      setSearchResults(res.data.results);

      setTotalPages(res.data.totalPages);
    } catch (e) {
    } finally {
      setSearching(false);
    }
  };
  useEffect(() => {
    GetAllSchools();
  }, []);

  const SearchSchool = async () => {
    setSearching(true);
    setNoResults(false);
    try {
      const res = await axios.get(
        `${BaseUrl}/school/search?name=${searchInput}&page=${currentPage}&limit=12`
      );
      setSearched(true);
      setSearchResults(res.data.results);
      setTotalPages(res.data.totalPages);
    } catch (e) {
      setNoResults(true);
      setSearchResults([]);
      setTotalPages(0);
    } finally {
      setSearching(false);
    }
  };

  const CancelSearch = () => {
    setSearchResults([]);
    setTotalPages(0);
    GetAllSchools();
    setSearchInput("");
  };

  useEffect(() => {
    if (searchInput.length > 0) {
      SearchSchool();
    }
  }, [currentPage, BaseUrl]);

  useEffect(() => {
    if (searchInput.length === 0 && !searched) {
      GetAllSchools();
    }
  }, [currentPage]);

  return (
    <main className="w-full bg-white">
      <LandingPageNav />
      <div className="h-[500px]   xl:h-[750px]">
        <div className="relative flex h-full w-full items-center justify-between bg-[#064e3b]">
          <img
            src={BannerImg}
            alt="img"
            className="absolute top-0 h-full w-full object-cover opacity-40 "
          />

          <div className="z-20 ml-2 w-11/12 xl:ml-20 xl:w-5/12">
            <span className="text-4xl text-white xl:text-[50px]  ">
              <h1 className=" mb-1 font-medium xl:mb-10">Welcome to</h1>

              <h1 className="font-poppins font-bold ">
                <span className="bg-[#10b981] px-2 text-white lg:px-5">
                  SCHOOL
                </span>{" "}
                ARCHIVE
              </h1>
            </span>
            <p className="mt-4 text-lg text-white lg:text-2xl xl:mt-8">
              Explore the comprehensive documentation of schools within the
              Catholic Diocese of Idah. Our archive serves as a valuable
              resource for tracking historical and current data, including
              student enrollment numbers, staff employment records, and
              financial details across different terms and sessions.
            </p>
            {/* <button className=" mt-8 flex h-fit w-fit cursor-pointer items-center rounded-lg bg-brand-500 px-8 py-3  text-lg font-medium text-white">
              Search archives
              <MdSearch className="ml-2" size={20} />
            </button> */}
          </div>
        </div>
      </div>
      <div className=" mr-auto ml-auto w-full bg-[#dcfce7] px-5 pt-20 pb-10 xl:px-40">
        <div className="mb-10 mt-5 flex items-center justify-center  xl:mb-20 ">
          <div className="flex h-fit w-4/5 items-center rounded-lg bg-white px-3 py-3 xl:w-1/2">
            <div className="mr-2 text-gray-500">
              <MdSearch size={20} />
            </div>
            <input
              placeholder="Search Our Archive"
              className="w-full  border-none bg-none outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <button
            className=" ml-3 flex items-center rounded-xl bg-[#10b981] px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-[#10b981] active:bg-[#10b981] disabled:bg-[#a7f3d0]"
            onClick={SearchSchool}
            disabled={searchInput.length === 0}
          >
            Search
          </button>
        </div>

        <div className="max-h-[1000px] min-h-[300px] w-full xl:h-[550px]">
          {/* loading */}
          {searching && (
            <div className="flex h-full items-center justify-center text-center">
              <Spinner size={"xl"} />
            </div>
          )}

          {noResults ? (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <MdSearchOff size={50} className="mb-2 text-red-500" />
              <p className=" text-2xl font-thin text-red-500 xl:text-3xl">
                No school found !
              </p>
            </div>
          ) : !searching && searched ? (
            <>
              <div className="flex w-full items-center justify-between">
                <p className="mb-2 ml-2 font-medium text-gray-800">
                  Search results: {searchResults.length}
                </p>
                <button
                  className="flex items-center rounded-xl bg-red-300 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-red-500 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
                  onClick={CancelSearch}
                >
                  <MdClear />
                </button>
              </div>

              <div className="mb-2 grid h-5/6 w-full grid-cols-4 flex-wrap justify-between gap-x-4 overflow-auto">
                {searchResults.map((school, i) => {
                  return (
                    <SchoolCard
                      variant={true}
                      key={i}
                      name={school.name}
                      location={school.location}
                      telephone={school.telephone}
                      email={school.email}
                      id={school._id}
                    />
                  );
                })}
              </div>
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : searchResults?.length > 0 && !searching && !searched ? (
            <>
              <div className=" mb-10 flex  h-5/6 w-full grid-cols-4 grid-rows-3 flex-col gap-4 overflow-auto xl:mb-2 xl:grid xl:gap-y-10">
                {searchResults.map((school, i) => {
                  return (
                    <SchoolCard
                      variant={true}
                      key={i}
                      name={school.name}
                      location={school.location}
                      telephone={school.telephone}
                      email={school.email}
                      id={school._id}
                    />
                  );
                })}
              </div>
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : null}
        </div>
      </div>
      <div className="w-full pt-20">
        <p className="mb-20 text-center  text-2xl font-semibold text-[#064e3b] xl:text-4xl ">
          What we offer
        </p>
        <div className=" ml-auto mr-auto w-4/5 grid-cols-3 flex-col items-center justify-between  pb-20 xl:grid xl:gap-y-6">
          <div className="mb-10  h-48 rounded-2xl px-3 py-2.5 shadow-lg xl:mb-0 xl:h-full xl:w-4/5 xl:px-6 xl:py-5">
            <p className="mb-2 text-lg font-semibold text-[#022c22]">
              General School Information
            </p>
            <p className="text-base leading-6 text-[#022c22]">
              Access details such as school names, locations, head teachers, and
              contact information.
            </p>
          </div>
          <div className="mb-10 h-48 rounded-2xl  px-3 py-2.5 shadow-lg xl:mb-0 xl:h-full xl:w-4/5 xl:px-6 xl:py-5">
            <p className="mb-2 text-lg font-semibold text-[#022c22]">
              Establishment and Inspection Records
            </p>
            <p className="text-base leading-6 text-[#022c22]">
              Find information on the year of establishment, levels of education
              offered, and the date of the last inspection.
            </p>
          </div>
          <div className="mb-10  h-48 rounded-2xl px-3 py-2.5 shadow-lg xl:mb-0 xl:h-full xl:w-4/5 xl:px-6 xl:py-5">
            <p className="mb-2 text-lg font-semibold text-[#022c22]">
              School Staff Data
            </p>
            <p className="text-base leading-6 text-[#022c22]">
              Detailed records on the number of teaching and non-teaching staff,
              including permanent and contract employees.
            </p>
          </div>
          <div className="mb-10  h-48 rounded-2xl px-3 py-2.5 shadow-lg xl:mb-0 xl:h-full xl:w-4/5 xl:px-6 xl:py-5">
            <p className="mb-2 text-lg font-semibold text-[#022c22]">
              Student Data
            </p>
            <p className="text-base leading-6 text-[#022c22]">
              Comprehensive data on student enrollment by class, gender, and
              religion.
            </p>
          </div>
          <div className="hxl:-full mb-10 h-48  rounded-2xl px-3 py-2.5 shadow-lg xl:mb-0 xl:w-4/5 xl:px-6 xl:py-5">
            <p className="mb-2 text-lg font-semibold text-[#022c22]">
              Financial Information
            </p>
            <p className="text-base leading-6 text-[#022c22]">
              Breakdown of school fees per term for different educational
              levels.
            </p>
          </div>
          <div className="mb-10  h-48 rounded-2xl px-3 py-2.5 shadow-lg xl:mb-0 xl:h-full xl:w-4/5 xl:px-6 xl:py-5">
            <p className="mb-2 text-lg font-semibold text-[#022c22]">
              Scholarship Information
            </p>
            <p className="text-base leading-6 text-[#022c22]">
              Details on the number of students on scholarships, categorized by
              class and gender.
            </p>
          </div>
        </div>
        <div className=" mt-10 flex flex-col items-center justify-between bg-gray-200 py-20 px-6 lg:flex-row">
          <div className=" w-full xl:w-5/12">
            <img src={StorageImg} className="object-fit" alt="storageimage" />
          </div>

          <p className=" mt-10 w-full text-xl  leading-8 text-[#022c22] xl:mt-0 xl:w-1/2  xl:text-2xl xl:leading-10 ">
            Our meticulously maintained archive ensures that every piece of
            information is easily accessible and reliable, aiding in research
            and analysis of educational trends over the years. Dive into our
            collections and uncover the data that shapes our understanding of
            the educational system.
          </p>
        </div>
        <div className="h-20 w-full bg-white"></div>
      </div>
    </main>
  );
};

export default Home;
