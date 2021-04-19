import React from "react";
import "./index.scss";
import DashBoardStats from "./DashBoardStats";
import RecentOrders from "./RecentOrders";
import TopProducts from "./TopProducts";

const DashBoard = () => {
  return (
    <div className="p-6 text-gray-500">
      <DashBoardStats />
      <div className="flex my-8 justify-between">
        <RecentOrders />
        <TopProducts />
      </div>
    </div>
  );
};

export default DashBoard;
