import styled from "styled-components";
import theme from '../../../../GlobalStyle/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
  background: #e5e5e5;
`;

export const InputBox = styled.input`
    width: 100%;
    border-radius: 6px;
    border: 1px solid #E0E0E0;
    height: 65px;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
    background: #ffffff;
    font-family: 'Roboto', sans-serif;
    padding: ${theme.spacing * 2}px; 
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 50px ${theme.spacing * 4}px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  width: 400px;
  margin: 0 auto;
  display: block;
  text-align: center;
  position: relative;
  img,
  ${InputBox} {
    margin-bottom: ${theme.spacing * 2}px;
  }
`;

export const FormError = styled.div`
  width: 100%;
  text-align: left;

  span {
    color: #990000;
    font-size: 14px;
  }
`;


export const Button = styled.button`
    border-radius: 6px;
    height: 55px;
    min-width: 180px;
    height: ${props => (props.size ? props.size : '')}px;
    cursor: pointer;
    color: #ffffff;
    text-align: center;
    outline: none;
    font-size: 18px;
    border: 0;
    display: inline-block;
    background: ${props => theme.colors[props.theme].normal};
    transition: all 0.4s ease;
    &:hover {
        background: ${props => theme.colors[props.theme].dark};
    }
    width: ${props => props.full ? '100%': 'auto'};
`;

