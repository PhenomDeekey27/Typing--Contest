import React, { useState } from "react";
import { BiSolidKeyboard } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";

const Header = () => {
  const [time, Settime] = useState(15);
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
        <p>{time}</p>
        <div className="right-timer">
          <button onClick={() => Settime(15)}>15</button>
          <button onClick={() => Settime(30)}>30</button>
          <button onClick={() => Settime(60)}>60</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
