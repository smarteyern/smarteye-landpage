import styled from "styled-components";
import { allTheme } from "styles/ThemeProvider";

export const ButtonColors = {
  default: "default",
  primary: "primary",
  error: "error",
};

export const ButtonsVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};

const getColorButton = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.error:
      return theme.colors.error.main;
    default:
      return theme.colors.text.secundary;
  }
};

const getColorDark = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.dark;
    case ButtonColors.error:
      return theme.colors.error.dark;
    default:
      return theme.colors.text.primary;
  }
};

export const ButtonRoot = styled.button`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getColorButton};
  border: 2px solid ${getColorButton};
  border-radius: 4px;
  color: ${allTheme.light.colors.text.light};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${getColorDark};
    border: 2px solid ${getColorDark};
  }
`;

export const ButtonOutlined = styled(ButtonRoot)`
  background-color: transparent;
  color: ${getColorButton};

  &:hover:enabled {
    background-color: transparent;
    color: ${getColorDark};
    border: 2px solid ${getColorDark};
  }
`;

export const ButtonLink = styled(ButtonRoot)`
  background-color: transparent;
  border-color: transparent;
  color: ${getColorButton};
  padding-left: 0;
  padding-right: 0;

  &:hover:enabled {
    background-color: transparent;
    border-color: transparent;
    color: ${getColorDark};
  }
`;

export const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;
