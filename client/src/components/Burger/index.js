import React from "react";
import { StyledBurger } from "./BurgerElements";

export default function index({ open, toggle }) {
  return (
    <StyledBurger open={open} onClick={toggle}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
