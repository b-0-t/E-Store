// @ts-nocheck
import React from "react";
import "./popup-history.css";
import close from "./icons/right-arrow (1).png";
import useNavStore from "../../stores/NavStore";
import usePopupStore from "../data/usePopupStore";
import useCurrUserStore from "../data/userdata";
import Cart from "../cart/Cart";
import emptyCart from "./icons/empty-cart.png";
import OrderHistory from "../my orders/OrderHistory";

const PopupHistory = ({ children }) => {
  const { showPopupHistory, setshowPopupHistory } = usePopupStore();
  const { curruser } = useCurrUserStore();
  const handleClose = () => {
    document.body.classList.remove("no-scroll");
    setshowPopupHistory(false);
  };

  if (showPopupHistory) {
    document.body.classList.add("no-scroll");
  }

  return showPopupHistory ? (
    <div>
      <div onClick={handleClose} className="overlay"></div>
      <div className="overflow-auto popup">
        <div className=" mt-[30px] ">
          <div className=" items-center flex justify-center fixed z-50 font-semibold top-[0px] b   h-[70px] w-[585px] right-[15px]  text-xl bg-zinc-100 cart-heading">
            Order History
          </div>

          <button className=" z-50 mb-2 close-btn" onClick={handleClose}>
            <img style={{ width: "20px" }} src={close} alt="" />
          </button>
          {curruser.OrderHistoryList.length ? (
            <>
              <OrderHistory />
            </>
          ) : (
            <>
              <img
                className="w-[100px] absolute top-[200px] left-[170px]"
                src={emptyCart}
                alt="empty-cart-icon"
              />
            </>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default PopupHistory;
