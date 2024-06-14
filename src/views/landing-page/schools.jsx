import axios from "axios";
import HomeSchoolCard from "components/card/HomeSchoolCard";
import LandingPageNav from "components/navbar/landing-page-nav";
import { useEffect, useState } from "react";
import { MdSearch, MdSearchOff } from "react-icons/md";
import { useLocation } from "react-router-dom";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { Spinner } from "flowbite-react";
import Footer from "components/footer/Footer";

const Schools = () => {
  const state = useLocation().state;

  const input = state?.input;
  const [searchInput, setSearchInput] = useState(input ? input : "");
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;
  const [totalPages, setTotalPages] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const [onMount, setOnMount] = useState(true);

  const [noResults, setNoResults] = useState(false);

  const GetAllSchools = async () => {
    setSearching(true);
    try {
      const res = await axios.get(
        `${BaseUrl}/school?page=${currentPage}&limit=${limit}`
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
    if (!input) GetAllSchools();
  }, []);

  const SearchSchool = async () => {
    setSearching(true);
    setNoResults(false);
    setSearched(true);
    try {
      const res = await axios.get(
        `${BaseUrl}/school/search?name=${searchInput}&page=${currentPage}&limit=${limit}`
      );
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

  useEffect(() => {
    if (searchInput) {
      SearchSchool();
    }
  }, []);

  return (
    <main className="bg-white">
      <LandingPageNav />
      <div className="py-2.5 px-2 shadow-sm xl:py-5 xl:px-4">
        <form className="flex w-full items-center px-2 py-1 xl:px-4 xl:py-2">
          <div className="flex w-full items-center rounded-lg bg-gray-50 px-3 py-2 xl:w-2/5">
            <MdSearch size={25} className="mr-2 text-gray-300" />
            <input
              placeholder="Search School by name or location"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className=" w-11/12 bg-gray-50 xl:text-lg"
              type="search"
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              SearchSchool();
            }}
            className="ml-auto hidden rounded-xl bg-[#34d399] px-4 py-2 text-lg text-white  duration-100 ease-in hover:bg-[#10b981] disabled:bg-[#6ee7b7] xl:block"
            disabled={searchInput.length === 0}
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full p-5 py-10 xl:px-10">
        {searching ? (
          <div className="flex h-[550px] w-full items-center justify-center">
            <Spinner size={"xl"} />
          </div>
        ) : !searching && searchResults.length > 0 ? (
          <div className="min-h-[600px]">
            <p className="mb-5 font-medium text-[#10b981]">
              Results:{" "}
              <span className="font-bold">
                Page {currentPage} of {totalPages}
              </span>
            </p>
            <div className="mb-16 grid grid-cols-1 gap-y-16 xl:grid-cols-2">
              {searchResults.map((school, index) => {
                return <HomeSchoolCard data={school} key={index} />;
              })}
            </div>
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        ) : !searching && searchResults.length === 0 && searched ? (
          <div className="flex h-[600px] w-full flex-col items-center justify-center xl:h-[550px]">
            <MdSearchOff size={120} className="mb-2 text-red-400" />
            <p className=" text-center text-xl font-semibold text-red-400 xl:text-4xl">
              Sorry, we couldn't find any search results
            </p>
          </div>
        ) : null}
      </div>
      <Footer />
    </main>
  );
};

export default Schools;
