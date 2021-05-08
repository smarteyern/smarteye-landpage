import styled from "styled-components";

export const StyledMedia = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  width: 350px;
  height: 250px;
`;
