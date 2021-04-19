import React from "react";
import "./index.scss";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const DashBoardStats = () => {
  return (
    <div>
      <div>
        <h1 className="text-lg py-3 font-bold">Welcome Jane!</h1>
      </div>
      <div className="flex my-4 justify-between">
        <div className="total_sales mr-6 p-4 rounded-lg w-1/3 bg-white shadow-md ">
          <div className="flex mb-2 justify-between items-center">
            <p>Total Sales</p>
            <ShoppingBasketIcon />
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">$285,000</h1>
            <p className="text-green-500 text-xs font-bold">+20%</p>
          </div>
        </div>

        <div className="total_sales mr-6 p-4 rounded-lg w-1/3 bg-white shadow-md ">
          <div className="flex mb-2 justify-between items-center">
            <p>Total Products</p>
            <LocalOfferIcon />
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">4000</h1>
            <p className="text-red-500 text-xs font-bold">-12%</p>
          </div>
        </div>

        <div className="total_sales mr-6 p-4 rounded-lg w-1/3 bg-white shadow-md ">
          <div className="flex mb-2 justify-between items-center">
            <p>Total Orders</p>
            <ShoppingCartIcon />
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">48,000</h1>
            <p className="text-green-500 text-xs font-bold">+10%</p>
          </div>
        </div>

        <div className="total_sales mr-6 p-4 rounded-lg w-1/3 bg-white shadow-md ">
          <div className="flex mb-2 justify-between items-center">
            <p>Total Customers</p>
            <PeopleAltIcon />
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">12,000</h1>
            <p className="text-red-500 text-xs font-bold">-5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardStats;
