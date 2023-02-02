import React from "react";
import useProducts from "./hooks/useProducts";

export default function App() {
  const fetchedProducts = useProducts();
  const mappedProducts = fetchedProducts.products;
  console.log(mappedProducts);

  return (
    <div>
      {mappedProducts.map((item, _id) => (
        <ul>
          <li key={_id}>{item.name}</li>
        </ul>
      ))}
    </div>
  );
}
