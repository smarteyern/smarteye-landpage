import styled from "styled-components";
import { allTheme as theme } from "styles/ThemeProvider";

export const Root = styled.div`
  width: 350px;
  border-radius: 4px;
  border: 1.5px solid rgba(0, 0, 0, 0.125);
  overflow: hidden;
  background-color: ${theme.light.colors.background.main};
`;
