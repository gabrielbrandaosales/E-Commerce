import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  margin: 1rem 0rem;
  a {
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.lightGrey};
    border-radius: 6px;
    margin: 1rem 1rem 1rem 0rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    &:hover {
      transition: 0.3s;
      background-color: ${({ theme }) => theme.grey};
    }
  }
  .active {
    background-color: ${({ theme }) => theme.grey};
  }
`;
