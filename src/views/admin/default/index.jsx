import { MdSearch, MdSearchOff } from "react-icons/md";
import SchoolCard from "components/card/SchoolCard";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const SearchSchool = async () => {
      setSearching(true);
      try {
        const res = await axios.get(
          `${BaseUrl}/school/search?name=${searchInput}&page=${currentPage}&limit=10`
        );
        setSearched(true);
        setSearchResults(res.data.schools);
        setTotalPages(res.data.totalPages);
      } catch (e) {
      } finally {
        setSearching(false);
      }
    };
    if (searchInput) {
      SearchSchool();
    } else {
      setSearchResults([]);
    }
  }, [searchInput, currentPage, BaseUrl]);

  return (
    <div>
      <div className="mb-6 ml-auto mr-auto mt-5 flex h-fit w-1/2 items-center rounded-lg bg-white px-3 py-2">
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
      <div className="h-[550px] w-full">
        {searchResults.length === 0 && !searching && searched && (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <MdSearchOff size={50} className="mb-2 text-red-500" />
            <p className="text-3xl font-thin text-red-500">No school found !</p>
          </div>
        )}

        {searchResults.length > 0 && !searching && searched && (
          <>
            <p className="mb-2 ml-2 font-medium text-gray-800">
              Search results:
            </p>
            <div className="mb-2 grid h-5/6 w-full grid-cols-4 flex-wrap justify-between gap-x-4 overflow-auto">
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
        )}
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
