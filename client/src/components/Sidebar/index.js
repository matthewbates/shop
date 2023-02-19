import React from "react";
import { SidebarContainer } from "./SidebarElements";

export default function Sidebar({ open }) {
  return (
    <SidebarContainer open={open}>
      <div>
        <a href="#">A</a>
        <a href="#">B</a>
        <a href="#">C</a>
        <a href="#">D</a>
      </div>
    </SidebarContainer>
  );
}
