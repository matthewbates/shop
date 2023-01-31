import React, { useState, useEffect } from "react";
import { httpGetProducts } from "./requests";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    // await loading the entire array of product objects
    const fetchedProducts = await httpGetProducts();
    // set the products array
    setProducts(fetchedProducts);
  }

  useEffect(() => {
    // invoke getProducts - only needs to happen once
    getProducts();
  }, []);

  return products;
}
