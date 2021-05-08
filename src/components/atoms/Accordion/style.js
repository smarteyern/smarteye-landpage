import styled, { css } from "styled-components";
import { allTheme as theme } from "styles/ThemeProvider";

export const Root = styled.div`
  background-color: ${theme.light.colors.background.main};
  border: 1px solid ${theme.light.colors.background.paper};
  border-left: 5px solid ${(props) => props.theme.colors.primary.main};

  ${(props) =>
    props.open &&
    css`
      margin: 16px 0;
    `}

  &:first-child {
    margin-top: 0px;
  }

  &::last-child {
    margin-bottom: 0px;
  }
`;

export const Head = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  cursor: pointer;

  & h6 {
    margin: 0;
    flex: 1;
  }

  & svg {
    font-size: 1.5rem;
  }
`;

export const Body = styled.div`
  padding: 0 16px 16px 16px;
`;
