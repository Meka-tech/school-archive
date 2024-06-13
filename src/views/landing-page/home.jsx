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
import HomeSchoolCard from "components/card/HomeSchoolCard";

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

  const SearchSchool = async (e) => {
    e.preventDefault();
    setSearching(true);
    setNoResults(false);
    try {
      const res = await axios.get(
        `${BaseUrl}/school/search?name=${searchInput}&page=${currentPage}&limit=12`
      );
      setSearched(true);
      setNoResults(false);
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
    setSearchInput("");
    setNoResults(false);
  };

  useEffect(() => {
    if (searchInput.length > 0) {
      SearchSchool();
    }
  }, [currentPage, BaseUrl]);

  return (
    <main className="h-screen w-full bg-white">
      <LandingPageNav />
      <div className="relative flex h-[200px] w-full xl:h-[380px]">
        <div className="absolute top-0 flex h-[180px] w-full items-center justify-center overflow-hidden bg-[#022c22] xl:h-[360px]">
          <h1 className="z-10 text-base font-bold text-white xl:text-5xl">
            Search For Schools in the catholic Diocese of Idah
          </h1>
          <img
            src={BannerImg}
            alt="Banner"
            className="absolute top-0 h-full w-full object-cover opacity-50"
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <form className=" absolute bottom-0 z-30  ml-auto mr-auto flex h-fit w-11/12 items-center justify-between rounded-lg border-solid border-white bg-white px-2 py-1.5 shadow-xl duration-100 ease-in xl:mt-20 xl:w-7/12 xl:px-4 xl:py-3 ">
            <input
              placeholder="Search schools..."
              className=" ml-1 w-11/12 text-sm placeholder:text-gray-300  xl:ml-2  xl:text-base"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className="cursor-pointer rounded-full  px-2 duration-100 ease-in"
              onClick={SearchSchool}
              disabled={searchInput.length < 1}
            >
              <MdSearch className=" text-gray-500" size={25} />
            </button>
          </form>
        </div>
      </div>

      <div className=" w-full items-center justify-center bg-white px-4 py-3 xl:py-16 xl:px-10">
        {searching && (
          <div className="flex h-full items-center justify-center text-center">
            <Spinner size={"xl"} />
          </div>
        )}
        {noResults && (
          <>
            <button
              className=" ml-auto flex items-center rounded-xl bg-red-300 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-red-500 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
              onClick={CancelSearch}
            >
              Clear Search <MdClear className="ml-2" />
            </button>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <MdSearchOff size={50} className="mb-2 text-red-500" />
              <p className=" text-2xl font-thin text-red-500 xl:text-3xl">
                No school found !
              </p>
            </div>
          </>
        )}
        {!searching && searchResults.length > 0 && (
          <>
            <div className="mb-10 ml-auto mr-auto grid w-full grid-cols-1 items-center justify-center gap-x-10 gap-y-8  xl:w-10/12 xl:grid-cols-2">
              {searchResults.map((school, i) => {
                return <HomeSchoolCard data={school} />;
              })}
            </div>
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </main>
  );
};

export default Home;