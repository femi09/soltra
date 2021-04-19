import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./index.scss";
const SearchBox = () => {
  return (
    <div className="flex">
      <form action="">
        <div className="form_group flex items-center py-4">
          <SearchIcon />
          <input
            className="px-2 text-gray-500 focus:outline-none"
            placeholder="Search"
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
