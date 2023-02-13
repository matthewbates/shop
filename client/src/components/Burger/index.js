import React from "react";
import { StyledBurger } from "./BurgerElements";

export default function index({ open, toggle }) {
  return (
    <StyledBurger
      open={open}
      onClick={toggle}
      style={{ position: "fixed", top: "30px", left: "10px" }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
