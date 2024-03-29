import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  /* z-index: ${({ open }) => (open ? 1 : -1)}; */
`;

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 55%;
  height: 100%;
  z-index: 999;
  background: black;
  transition: 0.4s ease-in;
  left: ${({ open }) => (open ? "0" : "-100%")};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;
