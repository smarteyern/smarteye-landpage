import styled from 'styled-components';

export const Container = styled.div``;

export const ListIcon = styled.div`
  display: inline-block;

  p,
  li {
    font-size: 16px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: '\\2713\\0020';
      color: ${props => props.theme.colors.primary.light};
    }
  }
`;
