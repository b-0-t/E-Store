//fast render
// @ts-nocheck
import React, { Suspense, lazy, useState } from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/smallcomponents/loader";
import PopupHistory from "./components/popup history/PopupHistory";
import OrderHistory from "./components/my orders/OrderHistory";

//-slow-render-on focus

const Home1 = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/about/About"));
const Sellerboard = lazy(() => import("./components/sellerboard/Sellerboard"));
const Login = lazy(() => import("./Pages/Login"));
const Signupmain = lazy(() => import("./Pages/Signup"));
const PasswordForget = lazy(() => import("./components/PasswordForget"));
const UserBoard = lazy(() => import("./components/userboard/userboard"));
const Laptop = lazy(() => import("./components/userboard/Laptop"));
const TV = lazy(() => import("./components/userboard/TV"));
const Allproduct = lazy(() => import("./components/userboard/allproduct"));
const Mobilefltr = lazy(() => import("./components/userboard/Mobile-filter"));
const Detailed = lazy(() => import("./components/userboard/detailed/Detailed"));
const PrivateRoute = lazy(() => import("./components/login-extra/private"));
const PopupCart = lazy(() => import("./components/popup cart/PopupCart"));
const Cart = lazy(() => import("./components/cart/Cart"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50">
        <Nav setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      </header>

      <main>
        <Suspense
          fallback={
            <div className="p-4 text-center">
              <Loader />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home1 isLoggedIn={isLoggedIn} />} />

            {/* Private Routes */}
            <Route
              path="/pri"
              element={<PrivateRoute isLoggedIn={isLoggedIn} />}
            >
              <Route path="seller" element={<Sellerboard />} />
              <Route path="home" element={<UserBoard />}>
                <Route index element={<Allproduct />} />
                <Route path="tv" element={<TV />} />
                <Route path="mobile" element={<Mobilefltr />} />
                <Route path="laptop" element={<Laptop />} />
                <Route path="product/:id" element={<Detailed />} />
              </Route>
            </Route>
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/signup"
              element={<Signupmain setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/showPasswordPage" element={<PasswordForget />} />
          </Routes>
          <PopupCart>
            <Cart />
          </PopupCart>

          <PopupHistory>
            <OrderHistory />
          </PopupHistory>
        </Suspense>
      </main>
    </>
  );
}

export default App;
