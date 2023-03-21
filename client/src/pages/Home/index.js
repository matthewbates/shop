import React from "react";
import { HomeContainer, HomeItem } from "./HomeElements";

const testProducts = [
  {
    id: 1,
    name: "hat",
  },
  {
    id: 2,
    name: "shirt",
  },
  {
    id: 3,
    name: "pants",
  },
  {
    id: 4,
    name: "shoes",
  },
];

console.log(testProducts);

export default function Home() {
  return (
    <HomeContainer id="home">
      {testProducts.map((item, index) => (
        <HomeItem key={index}>{item.name}</HomeItem>
      ))}
    </HomeContainer>
  );
}
