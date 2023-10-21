import React, { useEffect, useState } from "react";
import { BiSolidKeyboard } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";

const Header = ({ time }) => {
  return (
    <div>
      <div className="top">
        <div className="type">
          <h1>TypeCat</h1>
          <BiSolidKeyboard className="keyboard"></BiSolidKeyboard>
        </div>
        <BiSolidUserCircle className="circle"></BiSolidUserCircle>
      </div>
      <div className="Timer">
        <p className="time">{time}</p>
        <div className="right-timer">
          <button>15s</button>
          <button>30s</button>
          <button>60s</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
