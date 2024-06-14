import LandingPageNav from "components/navbar/landing-page-nav";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useLocation } from "react-router-dom";

const SchoolSearch = () => {
  const state = useLocation().state;

  const input = state?.input;
  const [searchInput, setSearchInput] = useState(input ? input : "");
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const [noResults, setNoResults] = useState(false);
  return (
    <main className="bg-white">
      <LandingPageNav />
      <div className="py-5 px-4">
        <form className="flex w-full items-center px-4 py-2">
          <div className="flex w-2/5 items-center rounded-lg bg-gray-50 px-3 py-2">
            <MdSearch size={25} className="mr-2 text-gray-300" />
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className=" w-4/5 bg-gray-50 text-lg"
            />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    </main>
  );
};

export default SchoolSearch;
