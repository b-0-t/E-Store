// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import userlogstore from "../data/loginuser";
import useCurrUserStore from "../data/userdata";

const PrivateRoute: React.FC = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  function goToLogin() {
    navigate("/login");
  }

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <>
      <div className="flex-grow flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-4 md:mb-6">
            User Not Logged In
          </h2>
          <p className="text-gray-700 mb-4 md:mb-6">
            It looks like you're not logged in. Please log in to access this
            page.
          </p>
          <button
            onClick={goToLogin}
            className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Go to Login
          </button>
        </div>
      </div>
    </>
  );
};

export default PrivateRoute;
