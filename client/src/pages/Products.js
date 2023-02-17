import React from "react";

export default function Products({ useProducts }) {
  const fetchedProducts = useProducts();
  const productsArray = fetchedProducts;
  console.log(productsArray);
  return (
    <div>
      {productsArray.map((item, _id) => (
        <ul key={_id}>
          <li>{item.name}</li>
        </ul>
      ))}
    </div>
  );
}
