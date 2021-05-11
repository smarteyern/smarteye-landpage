import styled, { css } from "styled-components";
import { allTheme as theme } from "styles/ThemeProvider";
import { BreadkpointsSize, breakAt } from "styles/Breadkpoints";

export const Content = styled.div`
  padding: 40px 0;

  ${(props) =>
    props.inverse &&
    css`
      background-color: ${theme.light.colors.background.default};
    `}

  ${breakAt(BreadkpointsSize.md)} {
    padding: 60px 0;
  }

  h2 {
    margin-top: 0;
  }
`;
