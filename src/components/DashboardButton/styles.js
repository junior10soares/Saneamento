import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5e81f4;
  color: #fff;
  font-weight: bold;
  padding: 16px 48px;
  border: none;
  border-radius: 4px;
  transition: 0.1s;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background: #5171db;
  }
`;
