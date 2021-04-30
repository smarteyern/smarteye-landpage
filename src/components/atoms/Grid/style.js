import styled, { css } from "styled-components";
import { breakAt, BreadkpointsSize } from "styles/Breadkpoints";

const getPrimaryLight = ({ theme }) => theme.colors.primary.light;

const breakColumnAt = (size) => (props) =>
  props[size] &&
  css`
    ${breakAt(BreadkpointsSize[size])} {
      grid-template-columns: repeat(${(props) => props[size]}, 1fr);
    }
  `;

export const GridRoot = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;

  ${breakColumnAt("sm")}

  ${breakColumnAt("md")}
  
  ${breakColumnAt("lg")}

  ${breakColumnAt("xl")}
`;

export const Box = styled.div`
  height: 200px;
  background-color: ${getPrimaryLight};
`;
