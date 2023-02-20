import React, { useEffect } from "react";
import { SidebarWrapper, SidebarContainer } from "./SidebarElements";

import Navlinks from "../Navlinks";

export default function Sidebar({ setOpen, open }) {
  const viewportResize = (e) => {
    if (e.target.innerWidth > 768) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", viewportResize);
    return () => {
      window.removeEventListener("resize", viewportResize);
    };
  }, []);

  return (
    <SidebarWrapper>
      <SidebarContainer open={open}></SidebarContainer>
    </SidebarWrapper>
  );
}
