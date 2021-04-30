import styled from "styled-components";
import { allTheme as theme } from "styles/ThemeProvider";

export const Root = styled.footer`
  background-color: ${theme.light.colors.background.dark};
  color: ${theme.light.colors.background.dark};
  padding: 40px 0;

  h6 {
    text-transform: uppercase;
    margin-top: 0;
    color: ${theme.light.colors.text.light};
  }

  p {
    color: ${theme.light.colors.text.secundary};
    margin-top: 0;
  }
`;

export const IconContainer = styled.span`
  margin-right: 16px;
  color: ${(props) => props.theme.colors.primary.light};
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.light};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
  }
`;
