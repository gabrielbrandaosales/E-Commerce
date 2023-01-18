import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  z-index: 100;
  transition: transform 0.3s ease;
  .item {
    flex-shrink: 0;
    width: 80%;
    border-radius: 4px;
    background-color: #eee;
    text-align: center;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 1rem auto;
`;
