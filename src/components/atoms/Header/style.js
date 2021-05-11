import styled from "styled-components";
import { BreadkpointsSize, breakAt } from "styles/Breadkpoints";

export const Root = styled.div`
  flex: 1;
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.theme.colors.background.darkBlue};

  & img {
    position: relative;
    width: 192px;
    height: 45px;
    margin-top: 40px;
    margin-left: 20px;
    margin-bottom: 50px;

    ${breakAt(BreadkpointsSize.sm)} {
      margin-top: 40px;
      margin-left: 50px;
      margin-bottom: 50px;
    }

    ${breakAt(BreadkpointsSize.md)} {
      margin-top: 40px;
      margin-left: 50px;
      margin-bottom: 50px;
    }

    ${breakAt(BreadkpointsSize.lg)} {
      margin-top: 40px;
      margin-left: 60px;
      margin-bottom: 50px;
    }

    ${breakAt(BreadkpointsSize.xl)} {
      margin-top: 40px;
      margin-left: 150px;
      margin-bottom: 50px;
    }
  }
`;
