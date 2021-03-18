import styled from 'styled-components';
import theme from '../../styles/theme';

export const Card = styled.article`
    width: 400px;
    background: black;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(104%);
  margin-bottom: ${theme.spacing * 2}px;

  @media (max-width: 1024px) {
    transform: translateX(50%);
  }
  @media (max-width: 768px) {
    transform: translateX(14%);
    width: 378px;
    margin-bottom: ${theme.spacing * 2}px;
  }

  @media(max-width: 650px){
    width: 340px;
    transform: translateX(8%);
  }
  @media(max-width: 562px){
    width: 334px;
    transform: translateX(-1%);

  }
  @media(max-width: 466px){
    width: 249px;
    -webkit-transform: translateX(-1%);
    -ms-transform: translateX(-1%);
    transform: translateX(-1%);
    height: 234px;
  }
  @media(max-width: 425px){
    width: 180px;
  }
  @media(max-width: 375px){
    width: 171px;
    transform: translateX(21%);
  }
  @media(max-width: 360px){
    width: 327px;
    transform: translateX(30%);
  }
  @media(max-width: 320px){
    width: 277px;
    transform: translateX(16%);
  }


`;

export const CardMacro = styled.article`
    width: 400px;
    background: black;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(117%);
  margin-bottom: ${theme.spacing * 2}px;

  @media (max-width: 1024px) {
    transform: translateX(50%);
  }
  @media (max-width: 768px) {
    transform: translateX(24%);
    margin-bottom: ${theme.spacing * 2}px;
  }

  @media(max-width: 657px){
    width: 300px;
    transform: translateX(36%);
  }
  @media(max-width: 425px){
    width: 180px;
  }
  @media(max-width: 375px){
    width: 171px;
    transform: translateX(21%);
  }
  @media(max-width: 360px){
    width: 327px;
    transform: translateX(30%);
  }
  @media(max-width: 320px){
    width: 277px;
    transform: translateX(16%);
  }
`;

export const Title = styled.h2`
    display: block;
    color: #ffffff;
    font-weight: 400;
    font-size: 24px;
    position: absolute;
    padding: ${theme.spacing * 3}px;
    bottom: 0;
    margin: 0;
    z-index: 10;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const Link = styled.a`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    opacity: 0;
    z-index: 15;
`;

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  display: block;
  object-fit: cover;
`;