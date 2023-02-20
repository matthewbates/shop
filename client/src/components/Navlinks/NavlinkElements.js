import styled from "styled-components";
import { Link } from "react-scroll";

export const LinkContainer = styled(Link)`
  display: flex;
`;

export const LinkWrapper = styled.div`
  color: white;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
