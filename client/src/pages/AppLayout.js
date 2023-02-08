import React from "react";
import useProducts from "../hooks/useProducts";

export default function AppLayout() {
  const fetchedProducts = useProducts();
  const productsArray = fetchedProducts;
  console.log(productsArray.products);

  return (
    <div>
      {productsArray.products.map((item, _id) => {
        return (
          <ul>
            <li>{item.name}</li>
          </ul>
        );
      })}
    </div>
  );
}
