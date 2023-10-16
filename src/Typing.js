import React, { useState } from "react";

const Typing = () => {
  let text = "Underneath the starry night, waves gently lapped the sandy shore";
  let keychar = 0;
  return (
    <div className="text-box">
      {text.split(" ").map((char) => (
        <span key={"char" + keychar++}>{char} </span>
      ))}
    </div>
  );
};
export default Typing;
