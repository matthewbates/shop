import { NavbarContainer } from "./NavbarElements";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarContainer>
      <Outlet />
    </NavbarContainer>
  );
}
