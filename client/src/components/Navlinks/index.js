import React from "react";
import { LinkContainer, LinkWrapper } from "./NavlinkElements";

export default function Navlinks({ title }) {
  return (
    <LinkContainer
      activeClass="active"
      to={title}
      spy={true}
      smooth={true}
      duration={500}
    >
      <LinkWrapper>{title}</LinkWrapper>
    </LinkContainer>
  );
}
