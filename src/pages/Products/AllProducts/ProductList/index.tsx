import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import FilterDropdown from "./../FilterDropdown/index";
import "./index.scss";
import ProductItem from "./../ProductItem/index";

const ProductList = () => {
  return (
    <div className="product_list ">
      <div className=" product_list_top flex justify-between items-center">
        <h1 className="text-xl py-3 font-semibold">Products</h1>
        <Link to="/products/add_product">
          <button className="add_product_btn flex items-center text-xs text-white px-4 rounded-sm py-2 shadow-xl focus:outline-none font-semibold">
            <AddIcon />
            <span>ADD PRODUCT</span>
          </button>
        </Link>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-lg my-8">
        <div className="flex justify-between">
          <h1 className="font-semibold">All</h1>
          <div className="flex">
            <form action="" className="mx-2">
              <div className="form_group flex items-center rounded-lg bg-gray-100 px-2 py-1">
                <SearchIcon />
                <input
                  className="focus:outline-none text-xs mx-2 py-1 bg-transparent"
                  type="text"
                  placeholder="Search Products"
                />
              </div>
            </form>
            <FilterDropdown />
          </div>
        </div>

        <div className="product_list_items my-8">
          <table className="w-full">
            <thead>
              <tr className="">
                <th className="flex items-center text-sm font-semibold pb-2  text-gray-600">
                  <input type="checkbox" />
                  <KeyboardArrowDownIcon />
                </th>
                <th className="text-sm px-4 font-semibold text-gray-600 pb-2">
                  Images
                </th>
                <th className="text-sm px-4 w-1/4 text-left font-semibold text-gray-600 pb-2">
                  Name
                </th>
                <th className="text-sm px-4 text-left font-semibold text-gray-600 pb-2">
                  Category
                </th>
                <th className="text-sm px-4 text-left font-semibold text-gray-600 pb-2">
                  Brand
                </th>
                <th className="text-sm px-4 text-left font-semibold text-gray-600 pb-2">
                  Quantity
                </th>
                <th className="text-sm px-4 text-left px-4 font-semibold text-gray-600 pb-2">
                  Price
                </th>
                <th className="text-sm px-4 text-left  font-semibold text-gray-600 pb-2">
                  Status
                </th>
                <th className="text-sm px-4 text-right font-semibold text-gray-600 pb-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <ProductItem
                image="/images/jeremy-mcgilvrey-shirt.jpg"
                productName="Jeremu McGilvery-Shirt White"
                category="Fashion"
                brand="McGilvery"
                quantity={2}
                price={15000}
                status="approved"
              />
              <ProductItem
                image="/images/32_class_1080p_led_tv.jpg"
                productName="32 Inches 1080p Led TV"
                category="Electronics"
                brand="Sony"
                quantity={1}
                price={175000}
                status="waiting"
              />
              <ProductItem
                image="/images/france_redwine_2008_boisdemontlobre.png"
                productName="France Red Wine 2008"
                category="Food and Drinks"
                brand="Bois de Montlobre"
                quantity={4}
                price={88000}
                status="approved"
              />
              <ProductItem
                image="/images/iphone-12-pro-family-hero.jpeg"
                productName="iPhone 12 Pro Family Hero"
                category="Gadgets"
                brand="Apple"
                quantity={1}
                price={427000}
                status="approved"
              />

              <ProductItem
                image="/images/mama_gold.png"
                productName="Mama Gold Rice"
                category="Food and Drinks"
                brand="Mama Gold"
                quantity={1}
                price={26000}
                status="approved"
              />

              <ProductItem
                image="/images/teddy_bear_val.jpg"
                productName="Teddy Bear Love"
                category="Kids"
                brand="Beverly"
                quantity={5}
                price={40000}
                status="disapproved"
              />

              <ProductItem
                image="/images/hot_plate.png"
                productName="2500W Double Burner Electric Hot Plate "
                category="Home"
                brand="Toshiba"
                quantity={1}
                price={8000}
                status="waiting"
              />

              <ProductItem
                image="/images/women-top.jpg"
                productName="Ladies Black Top"
                category="Fashion"
                brand="Corazon"
                quantity={2}
                price={13000}
                status="approved"
              />
            </tbody>
          </table>

          <div className="my-6 flex justify-between items-center">
            <p className="text-xs font-bold">Showing 1 to 8 of 200 entries</p>
            <div className="flex text-xs items-center font-bold">
              <div className="mx-1 cursor-pointer">Previous</div>
              <div className="mx-2 cursor-pointer bg-blue-600 text-white rounded-full px-2 py-1">
                1
              </div>
              <div className="mx-2 cursor-pointer px-2 py-1">2</div>
              <div className="mx-1 cursor-pointer">Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
