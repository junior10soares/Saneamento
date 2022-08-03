import styled from 'styled-components';
import theme from '../theme';

export const ContainerHome = styled.div`
    max-width: ${props => props.full ? '100%' : theme.center + 'px'};
    margin: 0 auto;
    display: flex;
    padding: ${theme.spacing * 8}px 16px;
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    background: ${props => props.color};
    box-sizing: border-box;


    @media(max-width: 1024px){
      padding: ${theme.spacing * 8}px 48px;
      max-width: 706px;
    }

    @media (max-width: 768px) {
        /* padding: ${theme.spacing * 4}px; */
        width: 100%;
    }

    @media(max-width: 360px){
        padding: 64px 0px;
    max-width: 700px;
    margin-left: 14px;
    }
    @media(max-width: 320px){
        padding: 64px 0px;
    max-width: 706px;
    margin-left: 12px;
    }
`;
export const TitleHome = styled.h1`
 
    color: ${props => props.light ? '#ffffff' : theme.textColor};
    display: block;
    font-size: 36px;
    line-height: 1.2;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    text-align: ${props => props.center ? 'center' : 'left'};
    @media (max-width: 768px) {
        width: 100%;
        font-size: 24px;
        margin: ${theme.spacing * 2}px 0;
    }
`;

export const TextHome = styled.div`
    margin: ${theme.spacing * 3}px 0;
    color: ${theme.textColor};
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const InstagramFrame = styled.iframe`
  width: 500px;
    height: 90px;
@media (max-width: 320px){
    width: 500px;
    height: 390px;
    margin-bottom: 20px;
}
`


;

