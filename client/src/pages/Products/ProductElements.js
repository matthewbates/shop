import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductContainer = styled.div`
  display: flex;
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

export const ProductContainerImage = styled.div`
  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const ProductBodyContainer = styled.div``;

export const ProductBodyContainerH2 = styled.h2``;

export const ProductBodyContainerP = styled.p``;
