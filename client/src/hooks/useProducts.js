import { useState, useEffect, useCallback } from "react";

const API_URL = "http://localhost:8000";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const httpGetProducts = () => {
    const response = fetch(`${API_URL}/products`);
    return response.json();
  };

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // const getProducts = useCallback(async () => {
  //   const fetchedProducts = await httpGetProducts();
  //   setProducts(fetchedProducts);
  // }, []);

  // async function getProducts() {
  //   const fetchedProducts = await httpGetProducts();
  //   setProducts(fetchedProducts);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, [getProducts]);

  return products;
  console.log(products);
};

export default useProducts;
