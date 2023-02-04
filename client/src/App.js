import React from "react";
import useProducts from "./hooks/useProducts";
import useOrders from "./hooks/useOrders";

export default function App() {
  const fetchedProducts = useProducts();
  console.log(fetchedProducts);

  return <div>App</div>;
}
