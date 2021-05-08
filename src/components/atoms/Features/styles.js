import styled from "styled-components";

import { breakAt, BreadkpointsSize } from "styles/Breadkpoints";

const getPrimaryDark = ({ theme }) => theme.colors.primary.dark;
const getPrimaryLight = ({ theme }) => theme.colors.primary.light;
const getPrimaryText = ({ theme }) => theme.colors.text.light;

export const Root = styled.div`
  text-align: center;

  & h5 {
    margin: 16px 0;
    min-height: 3.12rem;

    ${breakAt(BreadkpointsSize.lg)} {
      min-height: 3.9rem;
    }
  }

  & p {
    margin: 0;
  }
`;

export const IconRoot = styled.div`
  display: inline-block;
  align-items: center;
  align-content: center;
  width: 116px;
  height: 116px;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    border: 1px solid ${getPrimaryDark};

    > * {
      color: ${getPrimaryText};
      background-color: ${getPrimaryDark};
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  width: 100%;
  height: 100%;
  border: 1px solid ${getPrimaryLight};
  border-radius: 50%;
  color: ${getPrimaryLight};
`;
