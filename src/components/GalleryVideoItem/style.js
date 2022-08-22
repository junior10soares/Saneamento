import styled from 'styled-components';

export const Card = styled.div`
  width: 130px;
  height: 100px;
  background: black;
  margin: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
    width: 100%;
    max-height: 103px;
    object-fit: cover;
`;

export const Button = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: none;
    border: none;
    color: #87939f;
   
    &:hover {
    color: #bf0d2b;
    transition: all 0.5s;
  }
`;