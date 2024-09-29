// @ts-nocheck
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useUserStore } from "../data/usersStore";
import useCurrUserStore from "../data/userdata";
import { Product, useProductStore } from "../data/ProductStore";
import toast from "react-hot-toast";

const OrderHistory = () => {
  const handleRating = (value: number) => {
    setValue(value);
  };

  // const [showRating, setShowRating] = useState(true);
  const { curruser } = useCurrUserStore();
  const { addRating } = useProductStore();

  return (
    <div>
      <h1 className="text-2xl pl-[20px]">Order History</h1>
      {curruser.OrderHistoryList.map((order) => (
        <div
          className=" rounded-xl"
          key={order.orderId}
          style={{
            border: " 1px solid #ccc",
            margin: "20px",
            padding: "10px",
          }}
        >
          <h2>Order ID: {order.orderId}</h2>
          <p>Ordered On: {order.date}</p>
          <p>Status: {order.status}</p>
          <h3>Products:</h3>
          <ul>
            {order.products.map((item) => (
              <li className="flex justify-between pt-4" key={item.id}>
                <div className="flex w-[300px] mr-5 about-product">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "70px" }}
                  />
                  <div>
                    <div className="flex justify-between pb-2 ">
                      <p className="font-bold">{item.title}</p>
                      <p>${item.price}</p>
                    </div>

                    <p className="flex-wrap">{item.description}</p>
                  </div>
                </div>

                <p>
                  <div>Rate Product:</div>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      toast.success("Thankyou for Rating us");
                      addRating(item.id, newValue);
                      console.log(newValue);
                    }}
                  />
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
