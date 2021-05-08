import styled, { css } from "styled-components";

export const Root = styled.div`
  color: ${(props) => props.theme.colors.text.light};
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(25, 60, 90, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

export const Content = styled.div`
  display: inline-block;

  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: "\\2713\\0020";
      color: ${(props) => props.theme.colors.primary.light};
    }
  }
`;
