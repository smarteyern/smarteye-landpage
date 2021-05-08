import React from "react";
import propTypes from "prop-types";

import {
  ButtonRoot,
  ButtonOutlined,
  ButtonLink,
  ButtonsVariants,
} from "./styles";

const Button = ({ type, children, color, disabled, onClick, variant }) => (
  <ButtonRoot
    disabled={disabled}
    type={type}
    color={color}
    onClick={onClick}
    variant={variant}
  >
    {children}
  </ButtonRoot>
);

const ButtonWrapper = (props) => {
  switch (props.variant) {
    case ButtonsVariants.outlined:
      return <ButtonOutlined {...props} />;
    case ButtonsVariants.link:
      return <ButtonLink {...props} />;
    default:
      return <Button {...props} />;
  }
};

ButtonWrapper.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
};

ButtonWrapper.propTypes = {
  type: propTypes.string,
  children: propTypes.node,
  color: propTypes.oneOf(["default", "primary", "error"]),
  variant: propTypes.oneOf(["default", "outlined", "link"]),
};

export default ButtonWrapper;
