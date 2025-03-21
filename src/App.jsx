import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Developer from "./components/Developer";
import Designer from "./components/Designer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/designer" element={<Designer />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
