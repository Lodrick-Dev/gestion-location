import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "animate.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
