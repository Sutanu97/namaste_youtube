import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchList = ({ searchText }) => {
  const searchResults = useSelector(
    (store) => store.searchSuggestions.searchObj
  );

  const searchItems = searchResults[searchText];
  if (!searchItems) return null;

  return (
    <div className="bg-gray-100 absolute left-[33%] mt-11 w-[42%] rounded-lg">
      <ul className="list-none">
        {searchItems.map((e) => (
          <Link key={e} to={"/results?search_query=" + e}>
            <li className="cursor-pointer py-2 px-2 hover:bg-gray-200">
              <span className="pr-4">🔍</span>
              {e}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
