import styled from "styled-components";

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
    margin-left: 120px;
    margin-bottom: 50px;
  }
`;
