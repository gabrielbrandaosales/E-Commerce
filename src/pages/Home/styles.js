import styled from 'styled-components';

export const Img = styled.img`
  border-radius: 8px;
`;

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  text-align: left;
  font-size: 1.25em;
  width: 31%;
  margin: 1rem 0;
  font-weight: bold;
  a {
    color: ${({ theme }) => theme.black};
    margin: 0rem 0rem;
    text-decoration: none;
  }
`;
