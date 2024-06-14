import { MdClear, MdSearch, MdSearchOff } from "react-icons/md";
import SchoolCard from "components/card/SchoolCard";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Spinner } from "flowbite-react";

const Dashboard = () => {
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
    GetAllSchools();
    setSearchInput("");
  };

  useEffect(() => {
    if (searchInput.length === 0 && !searched) {
      GetAllSchools();
    } else {
      SearchSchool();
    }
  }, [currentPage, searchInput.length, searched]);

  return (
    <div>
      <div className="mb-6 mt-5 flex items-center  justify-center ">
        <div className="flex h-fit w-4/5 items-center rounded-lg bg-white px-3 py-2 xl:w-1/2">
          <div className="mr-2 text-gray-500">
            <MdSearch size={20} />
          </div>
          <input
            placeholder="Search School Archives"
            className="w-full  border-none bg-none outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <button
          className=" ml-3 flex items-center rounded-xl bg-navy-700 px-5 py-2 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 disabled:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
          onClick={SearchSchool}
          disabled={searchInput.length === 0}
        >
          Search
        </button>
      </div>

      <div className="h-[620px] w-full xl:h-[550px]">
        {/* loading */}
        {searching && (
          <div className="flex h-full items-center justify-center text-center">
            <Spinner size={"xl"} />
          </div>
        )}

        {noResults ? (
          <>
            <button
              className=" ml-auto flex items-center rounded-xl bg-red-300 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-red-500 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
              onClick={CancelSearch}
            >
              <MdClear />
            </button>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <MdSearchOff size={50} className="mb-2 text-red-500" />
              <p className=" text-2xl font-thin text-red-500 xl:text-3xl">
                No school found !
              </p>
            </div>
          </>
        ) : !searching && searched ? (
          <>
            <div className="mb-2 flex w-full items-center justify-between">
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

            <div className=" mb-4 flex  h-5/6 w-full grid-cols-4 grid-rows-3 flex-col gap-4 overflow-auto xl:mb-2 xl:grid xl:gap-y-10">
              {searchResults.map((school, i) => {
                return (
                  <SchoolCard
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
            <div className=" mb-4 flex  h-5/6 w-full grid-cols-4 grid-rows-3 flex-col gap-4 overflow-auto xl:mb-2 xl:grid xl:gap-y-10">
              {searchResults.map((school, i) => {
                return (
                  <SchoolCard
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
      <div className="flex w-full justify-end">
        <button
          className="flex items-center rounded-full bg-navy-700 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
          onClick={() => {
            navigate("/admin/add-school");
          }}
        >
          Add School
          <FaPlus className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
