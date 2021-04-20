import React from "react";

type ProductItemProp = {
  image: string;
  productName: string;
  category: string;
  brand: string;
  quantity: number;
  price: number;
  status: string;
};

const ProductItem: React.FC<ProductItemProp> = ({
  image,
  productName,
  category,
  brand,
  quantity,
  price,
  status,
}) => {
  return (
    <tr className="w-full border-t-4 border-b-4">
      <td>
        <input type="checkbox" />
      </td>
      <td className="flex items-center justify-center py-2">
        <img className="w-12 h-12" src={image} alt="" />
      </td>
      <td className="text-sm px-4 font-semibold">{productName}</td>
      <td className="text-sm px-4 font-semibold">{category}</td>
      <td className="text-sm px-4 font-semibold">{brand}</td>
      <td className="text-sm px-4  font-semibold">{quantity}</td>
      <td className="text-sm px-4 font-semibold">NGN {price}</td>
      <td className="text-sm px-4  font-semibold">
        <span
          className={`${
            status === "approved"
              ? "bg-green-100 text-green-500 p-2  text-xs rounded-md"
              : status === "waiting"
              ? "bg-gray-100 text-gray-500 p-2   text-xs rounded-md"
              : "bg-pink-100 text-pink-500 p-2  text-xs rounded-md"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="text-sm px-4 text-center font-bold">...</td>
    </tr>
  );
};

export default ProductItem;
