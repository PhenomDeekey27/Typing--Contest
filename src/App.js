import React, { useState } from "react";
import "./style.css";
import Typing from "./Typing";
import Header from "./Header";
import Footer from "./Footer";
import Controls from "./Controls";

const App = () => {
  const [word, Setword] = useState(10);

  const [time, Settime] = useState(15);
  return (
    <div className="main-container">
      <Header time={time}></Header>
      <Typing word={word} Settime={Settime} time={time}></Typing>
      <Controls Setword={Setword}></Controls>

      <Footer></Footer>
    </div>
  );
};
export default App;
