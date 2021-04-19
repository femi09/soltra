import React from "react";
import { NavLink } from "react-router-dom";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

const SidebarOptions = () => {
  return (
    <div className="sidebar_options p-6">
      <NavLink
        to="/"
        className="sidebar_option flex items-center py-3 text-sm font-semibold text-gray-500"
      >
        <DashboardOutlinedIcon />
        <p className="mx-2">Dashboard</p>
      </NavLink>
      <NavLink
        to="/products"
        className="sidebar_option flex items-center py-3 text-sm font-semibold text-gray-500"
      >
        <LocalOfferOutlinedIcon />
        <p className="mx-2">Products</p>
      </NavLink>
      <NavLink
        to="/orders"
        className="sidebar_option flex items-center py-3 text-sm font-semibold text-gray-500"
      >
        <ShoppingCartOutlinedIcon />
        <p className="mx-2">Orders</p>
      </NavLink>
      <NavLink
        to="/customers"
        className="sidebar_option flex items-center py-3 text-sm font-semibold text-gray-500"
      >
        <PeopleOutlineIcon />
        <p className="mx-2">Customers</p>
      </NavLink>
      <NavLink
        to="/invoices"
        className="sidebar_option flex items-center py-3 text-sm font-semibold text-gray-500"
      >
        <DescriptionOutlinedIcon />
        <p className="mx-2">Invoices</p>
      </NavLink>
    </div>
  );
};

export default SidebarOptions;
