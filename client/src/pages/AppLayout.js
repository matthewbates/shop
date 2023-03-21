import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "./Home";
import Products from "./Products";

export default function AppLayout() {
  // const products = useProducts();

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
