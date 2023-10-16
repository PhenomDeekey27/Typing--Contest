import React from "react";
import { BiReset } from "react-icons/bi";

const Controls = () => {
  return (
    <div className="word-controls">
      <BiReset style={{ fontSize: "25px" }}></BiReset>
      <div className="reset">
        <button>esc</button>
        <p>-</p>
        <p>reset</p>
      </div>
      <div className="btn-count">
        <div className="buttons">
          <button>10</button>
          <button>50</button>
          <button>80</button>
          <button>100</button>
        </div>
        <p>-</p>
        <p>No.Of.Words</p>
      </div>
    </div>
  );
};

export default Controls;
