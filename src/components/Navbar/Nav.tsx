// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCaretDown } from "react-icons/fa";
import useCurrUserStore from "../data/userdata";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useProductStore } from "../data/ProductStore";
import usePopupStore from "../data/usePopupStore";
import cartIcon from "./shopping-cart.png";
import AddtoCart from "../smallcomponents/addto-cart-button";
import toast from "react-hot-toast";

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const { curruser, addItemToWishlist, removeitemfromwishlist, addToCart } =
    useCurrUserStore();
  const [searchProduct, setSearchProduct] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { products } = useProductStore();
  const { setshowPopupHistory, setshowPopupCart } = usePopupStore();

  const filteredProduct = searchProduct
    ? products.filter((item) =>
        item.title.toLowerCase().includes(searchProduct.toLowerCase())
      )
    : [];

  const goToHome = () => {
    if (isLoggedIn) {
      if (curruser.accountType === "customer") {
        console.log(curruser.accountType);
        navigate("/");
      }
    } else {
      navigate("/");
    }
  };
  //
  const goToAbout = () => navigate("/about");
  const goToLogin = () => navigate("/login");
  const goToSignup = () => navigate("/signup");
  const goToUserBoard = () => navigate("/pri/home");
  const goToSeller = () => navigate("/seller");

  const goToProduct = (id: number) => {
    navigate(`/pri/home/product/${id}`);
  };

  //// detailed form search-bar

  function searchtodetailed(idtogo) {
    if (isLoggedIn === true) {
      goToProduct(idtogo);
    } else {
      alert("login first");
      goToLogin();
    }
  }

  ///// function - detailed routing -then after 2 secondetproductsearch " "
  const handleBlur = () => {
    setTimeout(() => {
      setSearchProduct("");
      setIsFocused(false);
    }, 300); // 2000 milliseconds = 2 seconds
  };

  const { showPopup, setshowPopup } = usePopupStore();
  return (
    <div className="  bg-white shadow-md w-full z-50">
      <div className="  mr-10 flex flex-col sm:flex-col lg:flex-row lg:justify-between py-2 sm:py-4 px-4">
        <div className="flex justify-center mb-2 ">
          <button onClick={goToHome} className="flex items-center">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12"
              src="https://img.icons8.com/?size=60&id=115213&format=png&"
              alt="Logo"
            />
          </button>
        </div>
        {isLoggedIn ? (
          <div className="relative group  flex items-center w-full max-w-lg mx-auto">
            <input
              type="text"
              onChange={(e) => setSearchProduct(e.target.value)}
              value={searchProduct}
              placeholder="Search..."
              className="lg:w-full w-full px-6 py-3 pl-12 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition duration-300"
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                handleBlur();
              }}
            />
            <button className="absolute left-3 p-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>

            <div
              className={`absolute top-14 right-12 lg:right-0 mt-2 w-8/12 lg:w-full  ${
                searchProduct.length ? "h-64" : "h-0"
              }  overflow-y-auto bg-gray-100 shadow-lg rounded-lg z-50  transition-transform duration-300 group-active:transform ${
                isFocused ? "scale-100" : "hidden"
              }`}
            >
              <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-9">
                <div className="divide-y divide-gray-20 cursor-pointer">
                  {filteredProduct.map((item) => (
                    <li
                      onClick={() => {
                        searchtodetailed(item.id);
                      }}
                      key={item.id}
                      className="flex items-center gap-2 p-2 hover:bg-white"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <p className="font-semibold">{item.title}</p>
                      </div>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {isLoggedIn ? (
          <div className="flex items-center justify-center  pt-2 lg:pt-0 gap-4">
            <div className="relative cursor-pointer group">
              <div className="relative cursor-pointer group">
                <button
                  onClick={() => setshowPopupCart(true)}
                  className="flex items-center gap-2 py-2 px-4 text-xl font-semibold hover:text-red-600"
                >
                  Cart
                  <div className="relative w-[30px]">
                    <img src={cartIcon} alt="cart-icon" className="" />
                    <div className="w-[20px] h-[20px] s flex items-center justify-center rounded-full group-hover:translate-y-[-5px] absolute top-[-10px] p-3 right-[-10px] transition-transform duration-300 text-white bg-red-400">
                      {curruser.cartList.length}
                    </div>
                  </div>
                </button>
              </div>
              <div className="absolute right-[-100px] mt-2 w-64 bg-white shadow-lg rounded-lg z-50 hidden group-hover:block transition-transform duration-300 transform group-hover:scale-100 scale-95">
                {curruser.cartList.length > 0 ? null : (
                  <div className="p-4 border border-gray-400 text-center text-gray-600">
                    No items in cart
                  </div>
                )}
              </div>
            </div>

            <div className="relative  cursor-pointer group">
              <button className="flex items-center gap-2 py-2 px-4 text-lg font-semibold hover:text-red-500">
                Wishlist
                <FaCaretDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute right-0  w-64 bg-white shadow-lg rounded-lg z-50 hidden group-hover:block  ">
                <ul className="divide-y divide-gray-200">
                  {curruser.wishList.length > 0 ? (
                    curruser.wishList.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center gap-2 p-2 hover:bg-gray-100"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <p className="font-semibold">{item.title}</p>
                          <div className="flex gap-4">
                            <button
                              onClick={() => {
                                addToCart(item),
                                  removeitemfromwishlist(item.id);
                              }}
                            >
                              AddtoCart
                            </button>
                            <button
                              onClick={() => {
                                removeitemfromwishlist(item.id);
                              }}
                            >
                              remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="p-4 text-center text-gray-600">
                      No items in Wishlist
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* <button
              className="text-lg font-semibold hover:text-red-500"
              onClick={goToUserBoard}
            >
              Shop
            </button> */}
            <div className="relative w-[40px] h-[40px] justify-center items-center  group flex flex-col cursor-pointer">
              <div className=" bg-black w-[20px] m-[2px] h-[2px] transition-transform duration-300  group-hover:bg-red-500  group-hover:translate-y-[2.5px] group-hover:rotate-45 "></div>
              <div className=" bg-black w-[20px] m-[2px]  h-[2px] group-hover:hidden"></div>
              <div className="group-hover:bg-red-500  bg-black w-[20px] m-[2px] h-[2px] transition-transform duration-300 group-hover:-rotate-45 group-hover:translate-y-[-4px]  "></div>
              <div className="border border-gray-400 absolute top-[30px] right-4 lg:right-0 mt-2 w-48 bg-white shadow-lg  z-50 hidden group-hover:block transition-transform duration-300 transform group-hover:scale-100 scale-95">
                <ul className="divide-y divide-gray-200">
                  <li
                    onClick={() => setshowPopupHistory(true)}
                    className="p-4 text-center text-gray-600 hover:bg-gray-100 "
                  >
                    My Orders
                  </li>
                  <li
                    onClick={() => {
                      setIsLoggedIn(false);
                      toast.success("Logged Out");
                      navigate("/");
                    }}
                    className="p-4 text-center text-gray-600 hover:bg-gray-100"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center mr-7 justify-evenly gap-4">
            <button
              className="text-lg font-semibold hover:text-red-500"
              onClick={goToLogin}
            >
              Login
            </button>
            <button
              className="text-lg font-semibold hover:text-red-500"
              onClick={goToSignup}
            >
              Signup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
