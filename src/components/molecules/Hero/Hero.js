import React from "react";
import PropTypes from "prop-types";

import ContainerRoot from "components/atoms/ContainerRoot/ContainerRoot";
import { Root, Content } from "./Style";

const Hero = ({ image, children }) => (
  <Root image={image} data-testid="hero">
    <ContainerRoot>
      <Content>{children}</Content>
    </ContainerRoot>
  </Root>
);

Hero.propTypes = {
  image: undefined,
  children: undefined,
};

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
