import React from "react";
import PropTypes from "prop-types";
import { StyledMedia } from "./style";

const CardMedia = ({ image }) => <StyledMedia image={image} />;

CardMedia.defaultProps = {
  children: undefined,
};

CardMedia.propTypes = {
  children: PropTypes.string,
};

export default CardMedia;
