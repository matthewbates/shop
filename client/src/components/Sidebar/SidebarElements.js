import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 55%;
  height: 100%;
  padding-top: 3.5rem;
  flex-direction: column;
  flex-wrap: nowrap;
  /* flex-flow: column nowrap; */
  z-index: 999;
  transition: 0.4s ease-in;
  background: black;
  left: ${({ open }) => (open ? "0" : "-100%")};
  opacity: ${({ open }) => (open ? 1 : 0)};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    justify-content: center;
    text-align: center;
  }
`;
