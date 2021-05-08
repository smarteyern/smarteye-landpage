import React from "react";
import PropTypes from "prop-types";
import { LogoImage, Root } from "./style";
import Logo from "assets/images/logo_light.png";

const Header = ({ image }) => (
  <Root image={image}>
    <img src={Logo} alt="SmartEye" />
  </Root>
);

Header.defaultProps = {
  image: undefined,
  children: undefined,
};

Header.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
