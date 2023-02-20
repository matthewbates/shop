import React, { useState } from "react";
import { NavbarContainer, NavlinksWrapper } from "./NavbarElements";

import Navlinks from "../Navlinks";
import Burger from "../../components/Burger";
import Sidebar from "../Sidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <NavbarContainer>
      <Burger open={open} toggle={handleClick} />
      <Sidebar setOpen={setOpen} open={open} />
      <NavlinksWrapper>
        <Navlinks title="home">Home</Navlinks>
        <Navlinks title="products">Products</Navlinks>
      </NavlinksWrapper>
    </NavbarContainer>
  );
}
