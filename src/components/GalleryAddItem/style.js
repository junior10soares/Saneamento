import styled from 'styled-components';

export const Card = styled.div`
  width: 100px;
  height: 100px;
  background: #5e81f4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s;
  margin: 15px;

  &:hover {
    background: #5171db;
  }
`;

export const ItemInput = styled.input`
    width: 103px;
    height: 103px;
`;