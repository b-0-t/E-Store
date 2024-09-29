// @ts-nocheck
import React, { useState } from "react";
import useUserStore from "../data/userdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingDashedLineArrowRight } from "@fortawesome/free-solid-svg-icons";

interface wishlistitem {
  id: number;
}

const Likeitem: React.FC<wishlistitem> = ({ id }) => {
  const { curruser, addItemToWishlist, removeitemfromwishlist } =
    useUserStore();
  const [clik, setClik] = useState(false);

  return (
    <button
      onClick={() => {
        clik
          ? (setClik(false), removeitemfromwishlist(id))
          : (setClik(true), addItemToWishlist(id));
        console.log(curruser);
      }}
    >
      {clik ? (
        <div className="active:translate-y-0.5">
          {" "}
          <FontAwesomeIcon
            icon={solidHeart}
            style={{ color: "#ff0088", fontSize: "24px" }}
          />
        </div>
      ) : (
        <div className="active:translate-y-0.5">
          {" "}
          <FontAwesomeIcon
            icon={solidHeart}
            style={{ color: "#ff0088", fontSize: "24px" }}
          />
        </div>
      )}
    </button>
  );
};

export default Likeitem;
