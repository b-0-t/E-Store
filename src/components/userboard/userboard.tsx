// @ts-nocheck
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./userboard.css"; // Import Tailwind styles if you have custom styles
import useCurrUserStore from "../data/userdata";
import useGlobalStore from "../../SignUp_Store/GlobalStore";

const UserBoard = () => {
  const { curruser } = useCurrUserStore();
  const { updateUser } = useGlobalStore();
  const navigate = useNavigate();

  function goToMobile() {
    navigate("/pri/home/mobile");
  }

  function goToTV() {
    navigate("/pri/home/tv");
  }

  function goToLaptop() {
    navigate("/pri/home/laptop");
  }

  function goToAllProducts() {
    navigate("/pri/home");
  }

  useEffect(() => {
    updateUser(curruser.id, curruser);
  }, [curruser, updateUser]);

  return (
    <div className="user-board-main">
      {" "}
      {/* Added mt-16 to account for fixed navbar height */}
      <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-20 sm:py-1 lg:py-4">
        <button
          onClick={goToMobile}
          className="btn px-4 py-2 rounded transition-transform transform hover:scale-105"
        >
          Mobile
        </button>
        <button
          onClick={goToLaptop}
          className="btn px-4 py-2 rounded transition-transform transform hover:scale-105"
        >
          Laptop
        </button>
        <button
          onClick={goToTV}
          className="btn px-4 py-2 rounded transition-transform transform hover:scale-105"
        >
          TV & Monitors
        </button>
        <button
          onClick={goToAllProducts}
          className="btn px-4 py-2 rounded transition-transform transform hover:scale-105"
        >
          All Products
        </button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserBoard;
