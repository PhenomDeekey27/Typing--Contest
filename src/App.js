import React, { useState } from "react";
import "./style.css";
import Typing from "./Typing";
import Header from "./Header";
import Footer from "./Footer";
import Controls from "./Controls";

const App = () => {
  const [time, Settime] = useState(15);

  return (
    <div className="main-container">
      <Header time={time} Settime={Settime}></Header>
      <Typing></Typing>
      <Controls></Controls>

      <Footer></Footer>
    </div>
  );
};
export default App;
