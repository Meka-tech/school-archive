import axios from "axios";
import HomeSchoolCard from "components/card/HomeSchoolCard";
import LandingPageNav from "components/navbar/landing-page-nav";
import { useEffect, useState } from "react";
import {
  MdCancel,
  MdClear,
  MdFilter,
  MdFilter1,
  MdFilterList,
  MdSearch,
  MdSearchOff,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { Dropdown, Modal, Spinner } from "flowbite-react";
import Footer from "components/footer/Footer";
import FilterModal from "components/modals/filterModal";
import { FaSort } from "react-icons/fa";
import { BsSortDown, BsSortUp } from "react-icons/bs";

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
  const [sortText, setSortText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState({});
  const [order, setOrder] = useState(-1);

  const [noResults, setNoResults] = useState(false);

  const GetAllSchools = async (sort) => {
    setSearching(true);
    try {
      let sortOption;
      switch (sort) {
        case "Recently Updated":
          sortOption = "recentlyUpdated";
          break;
        case "Founding Year":
          sortOption = "latestFoundingYear";
          break;
        case "Latest Inspection Date":
          sortOption = "latestInspectionDate";
          break;
        default:
          sortOption = "";
      }

      const filter = { ...filterOptions };

      const res = await axios.get(
        `${BaseUrl}/school?page=${currentPage}&limit=${limit}${
          sort ? `&sort=${sortOption}&order=${order}` : ""
        }${
          filter.foundingYear
            ? `&foundingYear=${JSON.stringify(filter.foundingYear)}`
            : ""
        } ${
          filter.studentBoarding
            ? `&hasBoarding=${JSON.stringify(filter.studentBoarding)}`
            : ""
        } ${
          filter.securityGuard
            ? `&hasGuard=${JSON.stringify(filter.securityGuard)}`
            : ""
        }${
          filter.educationLevels?.length > 0
            ? `&educationLevels=${JSON.stringify(filter.educationLevels)}`
            : ""
        }`
      );

      setSearched(false);
      setSearchResults(res.data.results);
      setTotalPages(res.data.totalPages);
    } catch (e) {
      console.error(e);
    } finally {
      setSearching(false);
    }
  };

  const SearchSchool = async (sort) => {
    setSearching(true);
    setNoResults(false);
    setSearched(true);

    try {
      let sortOption;
      switch (sort) {
        case "Recently Updated":
          sortOption = "recentlyUpdated";
          break;
        case "Founding Year":
          sortOption = "latestFoundingYear";
          break;
        case "Latest Inspection Date":
          sortOption = "latestInspectionDate";
          break;
        default:
          sortOption = "";
      }

      const filter = { ...filterOptions };

      const res = await axios.get(
        `${BaseUrl}/school/search?search=${searchInput}&page=${currentPage}&limit=${limit}${
          sort ? `&sort=${sortOption}&order=${order}` : ""
        }${
          filter.foundingYear
            ? `&foundingYear=${JSON.stringify(filter.foundingYear)}`
            : ""
        } ${
          filter.studentBoarding
            ? `&hasBoarding=${JSON.stringify(filter.studentBoarding)}`
            : ""
        } ${
          filter.securityGuard
            ? `&hasGuard=${JSON.stringify(filter.securityGuard)}`
            : ""
        }${
          filter.educationLevels?.length > 0
            ? `&educationLevels=${JSON.stringify(filter.educationLevels)}`
            : ""
        }`
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

  const CancelSearch = () => {
    setSearchResults([]);
    setSortText("");
    setSearchInput("");
    setFilterOptions({});
    setOrder(-1);
    GetAllSchools(sortText);
  };

  const SetSorting = (sortText) => {
    setSortText(sortText);

    if (searchInput.length > 0) {
      SearchSchool(sortText);
    } else {
      GetAllSchools(sortText);
    }
  };

  useEffect(() => {
    if (!input) {
      GetAllSchools();
    }
  }, []);

  useEffect(() => {
    if (searchInput) {
      SearchSchool();
    }
  }, []);

  useEffect(() => {
    if (searchInput) {
      SearchSchool(sortText);
    } else {
      GetAllSchools(sortText);
    }
  }, [filterOptions, order, currentPage]);

  return (
    <main className="bg-white">
      <LandingPageNav />
      <Modal
        show={isModalOpen}
        size={"md"}
        onClose={() => setIsModalOpen(false)}
        popup
        dismissible
      >
        <FilterModal
          selectFilterOptions={(options) => setFilterOptions(options)}
          close={() => setIsModalOpen(false)}
          options={filterOptions}
        />
      </Modal>
      <div className="py-2.5 px-2 shadow-sm xl:py-5 xl:px-4">
        <form className="flex w-full flex-col items-center px-1 py-1 xl:flex-row xl:px-4 xl:py-2">
          <div className="flex w-full items-center rounded-lg bg-gray-50 px-3 py-2 xl:w-2/5">
            <MdSearch size={25} className="mr-2 text-gray-300" />
            <input
              placeholder="Search School by any keyword"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className=" w-11/12 bg-gray-50 xl:text-lg"
              type="search"
            />
          </div>
          <div className="mt-2 flex w-full flex-wrap items-center gap-y-2 xl:ml-auto xl:mt-0 xl:w-2/5  xl:justify-end">
            <div className="flex items-center">
              {Object.keys(filterOptions).length ? (
                <div
                  className={`mr-2 flex cursor-pointer items-center rounded-lg  border-2 border-gray-200 px-1 py-1  text-[#71717a] xl:mr-3 xl:px-3 xl:py-1.5
              `}
                  onClick={() => {
                    setFilterOptions({});
                  }}
                >
                  <p className="mr-1 text-sm xl:text-base">Clear</p>
                  <MdClear />
                </div>
              ) : null}

              <div
                className={`mr-2 flex cursor-pointer items-center  rounded-lg border-2 border-gray-200 px-1 py-1  text-[#71717a] xl:mr-3 xl:px-3 xl:py-1.5
              `}
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <p className="mr-1  text-sm xl:text-base ">Filter</p>
                <MdFilterList />
              </div>
            </div>

            <div className="flex items-center">
              <div className=" mr-2 xl:mr-4">
                <Dropdown
                  label={sortText ? `sort by: ${sortText}` : "Sort"}
                  dismissOnClick={true}
                  size="sm"
                  style={{ background: "transparent", color: "gray" }}
                >
                  <Dropdown.Item onClick={() => SetSorting("Recently Updated")}>
                    Recently Updated
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => SetSorting("Founding Year")}>
                    latest founding year
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => SetSorting("Latest Inspection Date")}
                  >
                    latest inspection date
                  </Dropdown.Item>
                </Dropdown>
              </div>
              {sortText && (
                <div className="mr-4">
                  <Dropdown
                    label={
                      order === -1 ? (
                        <BsSortDown size={20} />
                      ) : (
                        <BsSortUp size={20} />
                      )
                    }
                    dismissOnClick={true}
                    size="sm"
                    style={{
                      background: "transparent",
                      color: "gray",
                      width: "fit",
                    }}
                  >
                    <Dropdown.Item
                      onClick={() => {
                        setOrder(1);
                      }}
                    >
                      Ascending Order
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setOrder(-1);
                      }}
                    >
                      Descending Order
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              )}
            </div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                SearchSchool();
              }}
              className=" hidden rounded-xl bg-[#34d399] px-4 py-2 text-lg text-white  duration-100 ease-in hover:bg-[#10b981] disabled:bg-[#6ee7b7] xl:block"
              disabled={searchInput.length === 0}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="w-full p-5 py-10 xl:px-10">
        {searching ? (
          <div className="flex h-[550px] w-full items-center justify-center">
            <Spinner size={"xl"} />
          </div>
        ) : !searching && searchResults.length > 0 ? (
          <div className="min-h-[600px]">
            <div className="mb-5 flex items-center justify-between ">
              <p className="font-medium text-[#10b981]">
                Results:{" "}
                <span className="font-bold">
                  Page {currentPage} of {totalPages}
                </span>
              </p>
              {(searched || sortText) && (
                <button
                  className="flex items-center rounded-xl bg-red-300 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-red-500 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
                  onClick={CancelSearch}
                >
                  Clear Search <MdClear className="ml-1" />
                </button>
              )}
            </div>
            <div className="mb-16 grid grid-cols-1 gap-y-16 xl:grid-cols-2">
              {searchResults.map((school, index) => {
                return <HomeSchoolCard data={school} key={index} />;
              })}
            </div>
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={(e) => {
                setCurrentPage(e);
                if (searchInput.length > 0) {
                  SearchSchool(sortText);
                } else {
                  GetAllSchools(sortText);
                }
              }}
            />
          </div>
        ) : !searching &&
          searchResults.length === 0 &&
          (searched || Object.keys(filterOptions).length > 0) ? (
          <div className="relative flex h-[600px] w-full flex-col items-center justify-center xl:h-[550px]">
            <button
              className=" absolute top-1 right-2 flex items-center rounded-xl bg-red-300 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-red-500 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
              onClick={CancelSearch}
            >
              Clear Search <MdClear className="ml-1" />
            </button>
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
