import React from "react";
import PropTypes from "prop-types";
import { GridRoot, Box } from "./style";

const Grid = () => (
  <GridRoot sm={2} md={3} lg={4} xl={5}>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
  </GridRoot>
);

Grid.defaultProps = {
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  xxl: undefined,
};

Grid.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xxl: PropTypes.number,
};

export default Grid;
