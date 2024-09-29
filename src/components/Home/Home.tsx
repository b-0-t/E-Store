// @ts-nocheck
import React, { useEffect, useState, useRef } from "react";
import "./home.css"; // Custom CSS if needed

import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

// Assuming the correct type for `isLoggedIn` prop is boolean
interface Home1Props {
  isLoggedIn: boolean;
}

const Home1: React.FC<Home1Props> = ({ isLoggedIn }) => {
  const [list, setList] = useState<any[]>([]); // Adjust type if necessary
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const getMyPostData = async () => {
    try {
      const res = await axios.get("/products");
      setList(res.data);
    } catch (error) {
      console.error("Error aagya...", error.message);
    }
  };

  useEffect(() => {
    getMyPostData();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="home">
      <section className="relative bg-gray-800 text-white">
        <img className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Store!</h1>
          <p className="text-xl mb-6">
            Find the best products at unbeatable prices
          </p>

          <button
            onClick={() => {
              if (isLoggedIn) navigate("/pri/home");
              else navigate("/login");
            }}
            className="bg-yellow-500 text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-400"
          >
            Shop Now
          </button>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Upcoming Products !!
          </h2>
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-lg hover:bg-gray-700 focus:outline-none"
            >
              <BiSolidLeftArrow />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-lg hover:bg-gray-700 focus:outline-none"
            >
              <BiSolidRightArrow />
            </button>

            <div
              ref={scrollContainerRef}
              className="scroll-container flex overflow-x-auto space-x-4 pb-4"
            >
              {list.map((item) => {
                const { id, title, price, image } = item;
                return (
                  <div
                    key={id}
                    className="flex-shrink-0 bg-white shadow-lg rounded-lg overflow-hidden w-64"
                  >
                    <div className="mt-2 flex justify-center">
                      <img
                        src={image}
                        alt="Product Image"
                        className="object-cover w-auto h-32"
                      />
                    </div>

                    <div className="p-2 flex-col gap-2 mt-14">
                      <h3 className="text-lg font-semibold text-center">
                        {title.substring(0, 23)}
                        <span className="text-blue-800"> more...</span>
                      </h3>
                      <p className="text-gray-500 text-center">${price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">All products</h3>
              <button
                onClick={() => {
                  if (isLoggedIn) navigate("/pri/home");
                  else navigate("/login");
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
              >
                Shop Now
              </button>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Laptops</h3>
              <button
                onClick={() => {
                  if (isLoggedIn) navigate("/pri/home/laptop");
                  else navigate("/login");
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-4">
              <h4 className="text-xl font-bold mb-2">Company</h4>
              <ul>
                <li>
                  <p className="hover:underline">About Us</p>
                </li>
                <li>
                  <p className="hover:underline">Contact</p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4">
              <h4 className="text-xl font-bold mb-2">Support</h4>
              <ul>
                <li>
                  <p className="hover:underline">FAQ</p>
                </li>
                <li>
                  <p className="hover:underline">Returns</p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4">
              <h4 className="text-xl font-bold mb-2">Follow Us</h4>
              <ul>
                <li>
                  <p className="hover:underline">Facebook</p>
                </li>
                <li>
                  <p className="hover:underline">Twitter</p>
                </li>
                <li>
                  <p className="hover:underline">Instagram</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home1;
