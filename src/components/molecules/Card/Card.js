import React from "react";
import PropTypes from "prop-types";

import { Root } from "./style";

const Card = ({ children }) => <Root>{children}</Root>;

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
