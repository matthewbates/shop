import styled from "styled-components";

export const StyledBurger = styled.div`
  display: none;
  z-index: 2;
  width: 1rem;
  height: 1.5rem;
  flex-flow: column nowrap;
  justify-content: space-around;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 30px;
    left: 10px;
  }

  div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "white" : "white")};
    border-radius: 20px;
    transform-origin: 1px;
    transition: all 0.4s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      transition: 0.1s;
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
