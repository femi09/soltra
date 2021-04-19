import React from "react";
import SearchBox from "../SearchBox";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./index.scss";
const Header = () => {
  return (
    <div className="header bg-white shadow-sm w-full">
      <div className="header_nav flex justify-between items-center">
        <SearchBox />
        <div className="header_profile flex items-center">
          <div className="header_date text-xs font-bold px-2 text-gray-500">
            <p>17th April 2021</p>
          </div>
          <div className="header_notification border-r-2 border-l-2 px-2 mx-2">
            <NotificationsNoneIcon />
          </div>
          <div className="header_user flex items-center">
            <img className="w-8 h-8 mx-2" src="/user.png" alt="" />
            <p className="text-xs font-bold text-gray-500">Jane Doe</p>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
