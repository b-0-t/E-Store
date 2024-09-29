// @ts-nocheck
import React from "react";
import useUserStore from "../data/userdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useCurrUserStore from "../data/userdata";
import { Product } from "../data/ProductStore";
import toast from "react-hot-toast";

interface AddtoCartProps {
  item: Product;
}

const AddtoCart: React.FC<AddtoCartProps> = ({ item }) => {
  const { curruser, addToCart } = useCurrUserStore();
  return (
    <button
      onClick={() => {
        if (curruser.cartList.find((product) => item.id === product.id)) {
          toast.success("Quantity Updated");
        } else {
          toast.success("Added to Cart");
        }
        addToCart(item);
      }}
    >
      {" "}
      <FontAwesomeIcon icon={faShoppingCart} /> add to cart
    </button>
  );
};

export default AddtoCart;
