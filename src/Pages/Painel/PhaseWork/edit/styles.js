import styled from 'styled-components';
import theme from '../../../../GlobalStyle/theme';

export const Container = styled.div`
  max-width: ${props => props.full ? '100%' : theme.center + 'px'};
  margin: 0 auto;
  display: flex;
  padding: ${theme.spacing * 8}px 16px;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  background: ${props => props.color};
  box-sizing: border-box;
`;
export const ContainerForm = styled.div`
  width: 100%;
  max-width: 80%;

`;

export const Center = styled.div`
    max-width: ${theme.center}px;
    margin: 0 auto;
    display: block;
    width: 100%;
    position: relative;   
`;

export const Grafic = styled.div`
    width: 70%;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: center;
    margin: auto;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 99.5%;
    justify-content: center;
`;

export const ButtonForm = styled.div`
width:100%;
 display: flex; 
 justify-content: flex-end; 
 margin-top: 24px;
 margin-bottom: 24px;
`;

export const TitleSection = styled.h3`
      /* max-width: 650px; */
      width: 100%;
    /* padding-left: 70px; */
    margin: 0 0 ${theme.spacing}px;
    color: ${props => props.light ? '#ffffff' : theme.textColor};
    display: block;
    font-size: 36px;
    line-height: 1.2;
    font-weight: 400;
    padding-bottom: 60px;
    text-align: ${props => props.center ? 'center' : 'left'};
    @media (max-width: 768px) {
        font-size: 24px;
        margin: ${theme.spacing * 2}px 0;
    }
    @media (max-width: 320px){
      padding-left: 0px;

    }
  `;

export const ListButton = styled.button`
position: absolute;
top: 13%;
right: 21%;
padding: 12px 32px;
background: #5e81f4;
color: #fff;
font-weight: bold;
border: none;
border-radius: 4px;
transition: 0.1s;

&:hover {
  background: #5171db;
}
`;



