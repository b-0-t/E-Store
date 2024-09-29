// @ts-nocheck
import React from "react";
import "./popup.css";
import close from "./icons/close.png";
import useNavStore from "../data/NavStore";

const Popup = ({ children }) => {
  const { showPopup, setshowPopup } = useNavStore();
  const handleClose = () => {
    console.log("changes");
    setshowPopup(false);
  };

  return showPopup ? (
    <div>
      <div onClick={handleClose} className="overlay"></div>
      <div className="popup">
        <button className="close-btn" onClick={handleClose}>
          <img style={{ width: 15 }} src={close} alt="" />
        </button>
        <div className="content">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Popup;
