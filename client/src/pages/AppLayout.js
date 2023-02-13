import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import useProducts from "../hooks/useProducts";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "./Home";
import Products from "./Products";

export default function AppLayout() {
  const products = useProducts();

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/products"
            element={<Products products={products} />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
