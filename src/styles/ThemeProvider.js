import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

export const ThemeNames = {
  light: "light",
  dark: "dark",
};

const light = {
  colors: {
    primary: {
      main: "#2D9CDB",
      dark: "#225CAA",
      light: "#56CCF2",
    },
    text: {
      main: "#333333",
      primary: "#4F4F4F",
      secundary: "#BDBDBD",
      light: "#F4F4F4",
    },
    background: {
      main: "#FFFFFF",
      default: "#F2F2F2",
      paper: "#E0E0E0",
      dark: "#2A2A2A",
      darkBlue: "#003557",
    },
    error: {
      main: "#EB5757",
      dark: "#b22a00",
    },
    status: {
      sucess: "#27AE60",
      attention: "#F2C94C",
    },
  },
};

export const allTheme = {
  light,
  dark: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: "#225CAA",
        dark: "#56CCF2",
        light: "#2D9CDB",
      },
      text: {
        main: "#F4F4F4",
        primary: "#F2F2F2",
        secundary: "#BDBDBD",
        light: "#E0E0E0",
      },
      background: {
        default: "#333333",
        paper: "#4F4F4F",
      },
    },
  },
};

const ThemeProvider = ({ themes, children }) => (
  <StyledProvider theme={allTheme[themes]}>{children}</StyledProvider>
);

ThemeProvider.defaultProps = {
  themes: "light",
};

export default ThemeProvider;
