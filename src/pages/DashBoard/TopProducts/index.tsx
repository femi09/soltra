import React from "react";
import "./index.scss";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarHalfIcon from "@material-ui/icons/StarHalf";

const TopProducts = () => {
  return (
    <div className="top_products py-4 bg-white shadow-md rounded-lg w-1/2 mx-4">
      <h1 className="font-semibold px-4 mb-4 text-lg">Top Rated Products</h1>
      <div
        className="flex justify-between py-1 px-2 mb-4 border-t-2 
          items-center"
      >
        <div className="flex items-center">
          <div className="mx-2">
            <img
              className="w-24 h-24 object-contain"
              src="/images/andrew-hutchings-camera.jpg"
              alt=""
            />
          </div>

          <div className="text-xs p-1">
            <p className="font-bold text-gray-700 mb-1">
              Andrew Hutchings Camera
            </p>
            <p className="font-semibold">Electronics</p>
            <p className="font-semibold">Cannon</p>
          </div>
        </div>

        <div className="text-xs font-semibold">
          <p className="mb-1 font-bold">NGN 121,000</p>
          <p className="text-green-500">Available</p>
          <div className="ratings my-1 flex items-center">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarOutlineIcon />
          </div>
        </div>
      </div>

      <div className="flex justify-between py-1 px-2 mb-4 border-t-2 items-center">
        <div className="flex items-center">
          <div className="mx-2">
            <img
              className="w-24 h-24 object-contain"
              src="/images/christopher-john-pratt-wine.jpg"
              alt=""
            />
          </div>

          <div className="text-xs p-1">
            <p className="font-bold text-gray-700 mb-1">
              Christopher John Pratt Wine
            </p>
            <p className="font-semibold">Food & Drinks</p>
            <p className="font-semibold">BlueBerry</p>
          </div>
        </div>

        <div className="text-xs font-semibold">
          <p className="mb-1 font-bold">NGN 50,000</p>
          <p className="text-green-500">Available</p>
          <div className="ratings my-1 flex items-center">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarOutlineIcon />
          </div>
        </div>
      </div>

      <div className="flex justify-between py-1 px-2 mb-4 border-t-2 items-center">
        <div className="flex items-center">
          <div className="mx-2">
            <img
              className="w-24 h-24 object-contain"
              src="/images/jade-scarlato-shoes.jpg"
              alt=""
            />
          </div>

          <div className="text-xs p-1">
            <p className="font-bold text-gray-700 mb-1">Jade Scarlato Shoes</p>
            <p className="font-semibold">Fahsion</p>
            <p className="font-semibold">Nike</p>
          </div>
        </div>

        <div className="text-xs font-semibold">
          <p className="mb-1 font-bold">NGN 35,000</p>
          <p className="text-green-500">Available</p>
          <div className="ratings my-1 flex items-center">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarOutlineIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
