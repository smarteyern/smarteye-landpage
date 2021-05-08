import React from "react";
import PropTypes from "prop-types";

import { Container } from "./style";

const ContainerRoot = ({ children }) => (
  <>
    <Container>{children}</Container>
  </>
);

ContainerRoot.defaultProps = {
  children: undefined,
};

ContainerRoot.propTypes = {
  children: PropTypes.node,
};

export default ContainerRoot;
