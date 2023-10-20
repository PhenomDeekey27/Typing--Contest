import React, { useState } from "react";

const Typing = () => {
  let text =
    "Underneath the starry night, waves gently caressed the sandy shore, as a lone lighthouse stood sentinel, casting its reassuring beam across the vast expanse, guiding ships safely through the darkness.";
  let keychar = 0;
  return (
    <div className="text-box">
      <div className="upper-text">
        {text.split(" ").map((char) => (
          <span key={"char" + keychar++}>{char} </span>
        ))}
        <div className="user-text">
          <span>
            <input type="text"></input>
          </span>
        </div>
        <label>un</label>
      </div>
    </div>
  );
};
export default Typing;
