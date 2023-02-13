import { useState } from "react";
import {
  NavbarContainer,
  NavbarItems,
  NavLinksWrapper,
} from "./NavbarElements";
import Burger from "../../components/Burger";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <NavbarContainer>
      <Burger open={open} toggle={handleClick} />
    </NavbarContainer>
  );
}
