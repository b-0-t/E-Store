// @ts-nocheck
import React from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../../data/ProductStore";
import { Rating } from "@mui/material";
import AddtoCart from "../../smallcomponents/addto-cart-button";
import useCurrUserStore from "../../data/userdata";
import toast from "react-hot-toast";

const Detailed = () => {
  const { id } = useParams();
  const { products } = useProductStore();
  const { curruser, addToCart } = useCurrUserStore();

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <div className="p-4">Product not found</div>;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-5 flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <p className="text-lg text-gray-700 mb-4">{product.description}</p>
        <div className="text-lg font-semibold mb-4">
          Rating:
          <Rating
            name="read-only"
            precision={0.5}
            value={
              product.ratings.reduce(
                (sum: number, value: number) => sum + value,
                0
              ) / product.ratings.length
            }
            readOnly
          />
        </div>
        <p className="text-sm text-gray-600 mb-4">Inclusive of all taxes</p>
        <p className="text-sm mb-4">
          <b>EMI:</b> Starts at $5. No Cost EMI available
        </p>
        <div className="flex justify-start">
          <button
            onClick={() => {
              if (curruser.cartList.find((item) => item.id === product.id)) {
                toast.success("Quantity Updated");
              } else {
                toast.success("Added to Cart");
              }
              addToCart(product);
            }}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
