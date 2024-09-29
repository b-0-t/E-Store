// PrivateRoute.tsx
// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import userlogstore from "../data/loginuser";

const PrivateRoute: React.FC = () => {
  const navigate = useNavigate();
  const { user } = userlogstore();
  useEffect(() => {
    if (user?.role === "buyer") {
      navigate("/pri/home");
    } else if (user?.role === "seller") {
      navigate("/pri/seller");
    }
  }, [navigate, user]);

  return user ? <Outlet /> : <div>Login error</div>;
};

export default PrivateRoute;
