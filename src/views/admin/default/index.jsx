import { MdClear, MdFilterList, MdSearch, MdSearchOff } from "react-icons/md";
import SchoolCard from "components/card/SchoolCard";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Dropdown, Modal, Spinner } from "flowbite-react";
import FilterModal from "components/modals/filterModal";

const Dashboard = () => {
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState({});

  const navigate = useNavigate();
  const limit = 12;
  const [sortText, setSortText] = useState("");

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

      const res = await axios.get(
        `${BaseUrl}/school?page=${currentPage}&limit=${limit}${
          sort ? `&sort=${sortOption}` : ""
        }${
          Object.keys(filterOptions).length > 0
            ? `&filter=${filterOptions}`
            : ""
        }`
      );
      setSearched(false);
      setSearchResults(res.data.results);

      setTotalPages(res.data.totalPages);
    } catch (e) {
    } finally {
      setSearching(false);
    }
  };

  const SearchSchool = async (sort) => {
    setSearching(true);

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
      const res = await axios.get(
        `${BaseUrl}/school/search?search=${searchInput}&page=${currentPage}&limit=${limit}${
          sort ? `&sort=${sortOption}` : ""
        }${
          Object.keys(filterOptions).length > 0
            ? `&filter=${filterOptions}`
            : ""
        }`
      );
      setSearchResults(res.data.results);
      setTotalPages(res.data.totalPages);
    } catch (e) {
      setSearchResults([]);
      setTotalPages(0);
    } finally {
      setSearching(false);
    }
  };

  const CancelSearch = () => {
    setSearchResults([]);
    setSearchInput("");
    setSortText("");
    setFilterOptions({});
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
    GetAllSchools();
  }, []);

  return (
    <div>
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
      <form className="mb-6 mt-5 flex w-full flex-col items-center justify-between  xl:flex-row ">
        <div className="flex h-fit w-full items-center rounded-lg bg-white px-3 py-2 xl:w-2/5">
          <div className="mr-2 text-gray-500">
            <MdSearch size={20} />
          </div>
          <input
            placeholder="Search School Archives"
            className="w-full  border-none bg-none outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="search"
          />
        </div>

        <div className="mt-2 flex w-full items-center justify-between xl:ml-auto xl:mt-0 xl:w-3/5  xl:justify-end">
          {Object.keys(filterOptions).length ? (
            <div
              className={`flex cursor-pointer items-center rounded-lg  border-2 border-gray-200 bg-white px-1  py-1 text-[#71717a] xl:mr-3 xl:px-3 xl:py-1.5
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
            className={`flex cursor-pointer items-center rounded-lg  border-2 border-gray-200 bg-white px-1  py-1 text-[#71717a] xl:mr-3 xl:px-3 xl:py-1.5
              `}
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <p className="mr-1  text-sm xl:text-base ">Filter</p>
            <MdFilterList />
          </div>
          <div className="xl:mr-4">
            <Dropdown
              label={sortText ? `sort by: ${sortText}` : "Sort"}
              dismissOnClick={true}
              size="sm"
              style={{ background: "white", color: "gray" }}
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
          <button
            className=" ml-3  hidden items-center rounded-xl bg-navy-700 px-5 py-2 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 disabled:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30 xl:block"
            type="sumbit"
            onClick={(e) => {
              e.preventDefault();
              SearchSchool();
            }}
            disabled={searchInput.length === 0}
          >
            Search
          </button>
        </div>
      </form>

      <div className="h-[620px] w-full xl:h-[550px]">
        {/* loading */}
        {searching && (
          <div className="flex h-full items-center justify-center text-center">
            <Spinner size={"xl"} />
          </div>
        )}

        {!searching &&
        searchResults.length === 0 &&
        (searched || Object.keys(filterOptions).length > 0) ? (
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
        ) : !searching && searchResults.length > 0 ? (
          <div className="mb-4 xl:mb-2">
            <div className="mb-5 flex items-center justify-between ">
              <p className="font-medium text-navy-800">
                Results:{" "}
                <span className="font-bold">
                  Page {currentPage} of {totalPages}
                </span>
              </p>
              {searched && (
                <button
                  className="flex items-center rounded-xl bg-red-300 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-red-500 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
                  onClick={CancelSearch}
                >
                  Clear Search <MdClear className="ml-1" />
                </button>
              )}
            </div>
            <div className="  flex  h-5/6 w-full grid-cols-4 grid-rows-3 flex-col gap-4 overflow-auto  xl:grid xl:gap-y-10">
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
          </div>
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
