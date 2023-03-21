import React, { useState, useEffect } from "react";
import {
  ProductsContainer,
  ProductContainer,
  ProductContainerImage,
  ProductBodyContainer,
  ProductBodyContainerH2,
  ProductBodyContainerP,
} from "./ProductElements";

export default function Products({ useProducts }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((r) => r.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ProductsContainer id="products">
      {products.map(({ name }) => (
        <ProductContainer>
          <ProductContainerImage />
          <ProductBodyContainer>
            <ProductBodyContainerH2></ProductBodyContainerH2>
            <ProductBodyContainerP>{name}</ProductBodyContainerP>
          </ProductBodyContainer>
        </ProductContainer>
      ))}
    </ProductsContainer>
  );
}
