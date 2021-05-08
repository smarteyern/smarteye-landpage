import React from "react";
import PropTypes from "prop-types";
import { Root, Center, Card, CardImageTop } from "./style";

import Section from "components/molecules/Section/Section";

const Carousel = () => (
  <Root>
    <Section></Section>
  </Root>
);

Carousel.defaultProps = {
  image: undefined,
  title: undefined,
  description: undefined,
  children: undefined,
};

Carousel.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default Carousel;
