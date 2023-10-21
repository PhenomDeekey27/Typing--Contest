import React, { useEffect, useState } from "react";
import { BiSolidKeyboard } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";

const Header = () => {
  const [time, Settime] = useState(15);

  function increaser(value) {
    Settime(value);
    let reducer = setInterval(() => {
      if (value === 0) {
        clearInterval(reducer);
      }
      Settime(value);
      value--;
    }, 1000);
  }

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
          <button onClick={() => (time ? increaser(15) : null)}>15</button>
          <button onClick={() => (time ? increaser(30) : null)}>30</button>
          <button onClick={() => (time ? increaser(60) : null)}>60</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
