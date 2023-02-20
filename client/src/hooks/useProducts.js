// import { useState, useEffect, useCallback } from "react";
// import { httpGetProducts } from "./requests";

// const useProducts = () => {
//   const [products, setProducts] = useState([]);

//   const getProducts = useCallback(async () => {
//     const fetchedProducts = await httpGetProducts();
//     setProducts(fetchedProducts);
//   }, []);

//   // async function getProducts() {
//   //   const fetchedProducts = await httpGetProducts();
//   //   setProducts(fetchedProducts);
//   // }

//   useEffect(() => {
//     // invoke getProducts - only needs to happen once
//     getProducts();
//   }, [getProducts]);

//   return products;
// };

// export default useProducts;
