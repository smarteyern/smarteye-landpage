import React from "react";
import PropTypes from "prop-types";
import { Root } from "./style";

const Heading = ({ children }) => <Root>{children}</Root>;

Heading.defaultProps = {
  children: undefined,
};

Heading.propTypes = {
  children: PropTypes.node,
};

export default Heading;
