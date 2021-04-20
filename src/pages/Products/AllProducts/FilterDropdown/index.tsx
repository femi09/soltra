import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./index.scss";

const FilterDropdown = () => {
  return (
    <div className="dropdown flex items-center">
      <p className="mx-2 text-xs font-semibold">Filter by: </p>
      <div className="flex relative justify-between text-gray-600 text-xs font-bold items-center">
        <p className="mx-1">Category</p>
        <KeyboardArrowDownIcon />

        <div className="absolute w-full z-40 hidden  font-medium rounded-md shadow-lg">
          <div
            className="rounded-md bg-white shadow-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="flex cursor-pointer items-center py-1 px-2 border-t border-gray-100">
              <span
                className="block px-2 py-1 text-xs leading-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                Brand
              </span>
            </div>
            <div className="flex cursor-pointer items-center py-1 px-2 border-t border-gray-100">
              <span
                className="block px-2 py-1 text-xs leading-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                Status
              </span>
            </div>
            <div className="flex cursor-pointer items-center py-1 px-2 border-t border-gray-100">
              <span
                className="block px-2 py-1 text-xs leading-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                Price
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
