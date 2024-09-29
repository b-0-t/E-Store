// @ts-nocheck
import React from "react";
import "./popup-cart.css";
import rightArrow from "./icons/right-arrow (1).png";
import useNavStore from "../../stores/NavStore";
import usePopupStore from "../data/usePopupStore";
import useCurrUserStore from "../data/userdata";
import Cart from "../cart/Cart";

import emptyCart from "./icons/empty-cart.png";
import toast from "react-hot-toast";

const PopupCart = ({ children }) => {
  const { showPopupCart, setshowPopupCart } = usePopupStore();

  const { curruser, addOrderToHistory, emptyCart } = useCurrUserStore();
  const handleClose = () => {
    document.body.classList.remove("no-scroll");
    setshowPopupCart(false);
  };

  if (showPopupCart) {
    document.body.classList.add("no-scroll");
  }

  const handleCheckout = () => {
    setshowPopupCart(false);
    toast.success("Thankyou For Ordering");

    addOrderToHistory(curruser.cartList);
    emptyCart();
  };

  return showPopupCart ? (
    <div>
      <div onClick={handleClose} className="overlay-cart"></div>
      <div className="overflow-auto popup-cart">
        <div className=" mt-[30px] ">
          <div className=" items-center flex justify-center fixed font-semibold top-[0px] b   h-[70px] w-[440px] right-[10px]  text-xl bg-zinc-100 cart-heading">
            Cart
          </div>
          <button
            id="close-button"
            className="mb-2 close-btn-cart"
            onClick={handleClose}
          >
            <img style={{ width: "20px" }} src={rightArrow} alt="" />
          </button>

          {curruser.cartList.length ? (
            <>
              <Cart />
              <div className="fixed w-[440px]  p-[10px] flex items-center  justify-around  bottom-[0px] right-[10px]  bg-zinc-100">
                <div className="items-center total text-xl">
                  <span className="font-semibold">Total</span>: $
                  {curruser.cartList.reduce((sum, item) => {
                    return sum + item.quantity * item.price;
                  }, 0)}
                </div>
                <button
                  onClick={handleCheckout}
                  className=" text-xl w-[120px] rounded   p-[30px]  items-center  font-semibold  text-slate-100 flex justify-center bottom-0   bg-cyan-600 hover:bg-cyan-700 h-[10px] "
                >
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold w-[100px] absolute top-[200px] left-[170px]">
                Cart Empty
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default PopupCart;
