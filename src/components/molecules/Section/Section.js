import React from "react";
import PropTypes from "prop-types";

import ContainerRoot from "components/atoms/ContainerRoot/ContainerRoot";
import { Content } from "./style";

const Section = ({ inverse, children }) => (
  <Content inverse={inverse}>
    <ContainerRoot>{children}</ContainerRoot>
  </Content>
);

Section.defaultProps = {
  children: undefined,
  inverse: false,
};

Section.propTypes = {
  children: PropTypes.node,
  inverse: PropTypes.bool,
};

export default Section;
