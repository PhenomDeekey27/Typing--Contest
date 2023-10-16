import React from "react";
import "./style.css";
import Typing from "./Typing";
import Header from "./Header";
import Footer from "./Footer";
import Controls from "./Controls";

const App = () => {
  return (
    <div className="main-container">
      <Header></Header>
      <Typing></Typing>
      <Controls></Controls>
      <Footer></Footer>
    </div>
  );
};
export default App;
