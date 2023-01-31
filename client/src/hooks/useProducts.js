import React, { useState, useEffect, useCallback } from "react";
import { httpGetProducts } from "./requests";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const fetchedProducts = await httpGetProducts();
    setProducts(fetchedProducts);
  }, []);

  // optional workaround without useCallback hook
  //   async function getProducts() {
  //     const fetchedProducts = await httpGetProducts();
  //     setProducts(fetchedProducts);
  //   }

  useEffect(() => {
    // invoke getProducts - only needs to happen once
    getProducts();
  }, [getProducts]);

  return products;
}
