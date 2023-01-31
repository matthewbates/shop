import React, { useState, useEffect } from "react";
import useProducts from "./hooks/useProducts";

export default function App() {
  const products = useProducts();
  console.log(products);

  return (
    <div>
      {products.map((product, _id) => (
        <ul key={product._id}>
          <li key={product.index}>
            <strong>Name:</strong> {product.name}
          </li>
        </ul>
      ))}
    </div>
  );
}
