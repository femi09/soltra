import React from "react";

const RecentOrders = () => {
  return (
    <div className="recent_orders p-4 bg-white shadow-lg rounded-lg w-1/2">
      <h1 className="font-semibold mb-4 text-lg">Recent Orders</h1>
      <table className="py-8 w-full">
        <tr className="flex justify-between bg-gray-100 text-gray-600 rounded-md p-1 mb-2">
          <th className="py-2 text-left text-xs font-bold w-1/5">Order No</th>
          <th className="py-2 text-left text-xs font-bold w-1/3">Customer</th>
          <th className="py-2 text-left text-xs font-bold w-1/5">Date</th>
          <th className="py-2 text-left text-xs font-bold w-1/5">Status</th>
          <th className="py-2 text-left text-xs font-bold w-1/5">
            Total Price
          </th>
        </tr>

        <tr className="flex justify-between text-xs font-semibold border-2 rounded-md my-4 p-2">
          <td className="w-1/5">#21345</td>
          <td className="w-1/3 flex items-center">
            <img src="/images/man.png" className="w-6 h-6" alt="" />
            <p className="mx-2">Neil Armstrong</p>
          </td>
          <td className="w-1/5">18 Apr 2021</td>
          <td className="w-1/5">Pending</td>
          <td className="w-1/5">NGN 45,000</td>
        </tr>

        <tr className="flex justify-between text-xs font-semibold border-2 rounded-md my-4 p-2">
          <td className="w-1/5">#21345</td>
          <td className="w-1/3 flex items-center">
            <img src="/images/man-1.png" className="w-6 h-6" alt="" />
            <p className="mx-2">Paul Jones</p>
          </td>
          <td className="w-1/5">15 Apr 2021</td>
          <td className="w-1/5">Delivered</td>
          <td className="w-1/5">NGN 20,000</td>
        </tr>

        <tr className="flex justify-between text-xs font-semibold border-2 rounded-md my-4 p-2">
          <td className="w-1/5">#21345</td>
          <td className="w-1/3 flex items-center">
            <img src="/images/woman.png" className="w-6 h-6" alt="" />
            <p className="mx-2">Olivia Baker</p>
          </td>
          <td className="w-1/5">15 Apr 2021</td>
          <td className="w-1/5">Shipped</td>
          <td className="w-1/5">NGN 8,000</td>
        </tr>

        <tr className="flex justify-between text-xs font-semibold border-2 rounded-md my-4 p-2">
          <td className="w-1/5">#21345</td>
          <td className="w-1/3 flex items-center">
            <img src="/images/profile.png" className="w-6 h-6" alt="" />
            <p className="mx-2">Mike Dean</p>
          </td>
          <td className="w-1/5">15 Apr 2021</td>
          <td className="w-1/5">Pending</td>
          <td className="w-1/5">NGN 5,000</td>
        </tr>
        <tr className="flex justify-between text-xs font-semibold border-2 rounded-md my-4 p-2">
          <td className="w-1/5">#21345</td>
          <td className="w-1/3 flex items-center">
            <img src="/images/woman-1.png" className="w-6 h-6" alt="" />
            <p className="mx-2">Lara Silva</p>
          </td>
          <td className="w-1/5">23 Mar 2021</td>
          <td className="w-1/5">Delivered</td>
          <td className="w-1/5">NGN 20,000</td>
        </tr>
      </table>
    </div>
  );
};

export default RecentOrders;
