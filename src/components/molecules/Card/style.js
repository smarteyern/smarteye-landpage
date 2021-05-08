import styled from "styled-components";
import { allTheme as theme } from "styles/ThemeProvider";

export const Root = styled.div`
  width: 350px;
  border-radius: 4px;
  overflow: hidden;
  border-color: ${theme.light.colors.primary.light};
  background-color: ${theme.light.colors.background.main};
`;
