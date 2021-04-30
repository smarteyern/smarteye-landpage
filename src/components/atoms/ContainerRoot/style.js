import styled from "styled-components";

import { BreadkpointsSize, breakAt } from "styles/Breadkpoints";

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;

  ${breakAt(BreadkpointsSize.sm)} {
    padding: 0 48px;
  }

  ${breakAt(BreadkpointsSize.xl)} {
    padding: 0;
    width: 1140px;
    margin: 0 auto;
  }
`;
