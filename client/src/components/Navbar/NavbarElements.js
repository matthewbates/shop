import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: black;
  position: sticky;
  top: 0;
`;

export const NavbarItems = styled.div`
  color: white;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-right: 2rem;
  color: white;
`;

export const SidebarWrapper = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: ${({ open }) => (open ? 1 : -1)};
`;

export const NavlinksWrapper = styled.div`
  display: flex;
  gap: 1rem;
  
`;
