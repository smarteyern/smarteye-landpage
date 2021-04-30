import styled, { css } from "styled-components";
import { allTheme as theme } from "styles/ThemeProvider";

export const Content = styled.div`
  padding: 40px 0;
  ${(props) =>
    props.inverse &&
    css`
      background-color: ${theme.light.colors.background.default};
    `}

  h2 {
    margin-top: 0;
  }
`;
