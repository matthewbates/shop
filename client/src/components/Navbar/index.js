import { useState } from "react";
import {
  NavbarContainer,
  NavbarItems,
  NavLinksWrapper,
  SidebarWrapper,
} from "./NavbarElements";

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
      <SidebarWrapper>
        <Sidebar open={open} />
      </SidebarWrapper>
    </NavbarContainer>
  );
}
