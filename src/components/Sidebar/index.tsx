import React from "react";
import SidebarOptions from "./SidebarOptions";
import "./index.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="app_logo shadow-sm px-6 flex items-center">
        <img className="h-8 w-8" src="/shopping-cart.png" alt="" />
        <h1 className="text-xl mx-2 font-bold text-blue-600">SOLTRA</h1>
      </div>

      <div className="sidebar_content flex flex-col justify-between">
        <SidebarOptions />
      </div>

      <div className="integrations p-6">
        <h1 className="text-blue-600 text-m font-bold py-2">Integrations</h1>
        <div className="sidebar_option flex items-center py-2 text-sm font-semibold text-gray-500">
          <img className="w-8 h-8" src="/mailchimp.png" alt="" />
          <p className="mx-2"> Mailchimp</p>
        </div>
        <div className="sidebar_option flex items-center py-2 text-sm font-semibold text-gray-500">
          <img className="w-8 h-8" src="/paystack.png" alt="" />
          <p className="mx-2">Paystack</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
