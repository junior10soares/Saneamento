import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.article`
    display: block;
    width: 100%;
    background: black;
    position: relative;
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
    opacity: 0.7;
    display: block;
`;

export const ContainerMap = styled.div`
   

 @media(max-width: 360px){
        width: 339px;
    height: 500px;
    margin-left: -37px;
    margin-top: -107px;
    }

    @media(max-width: 320px){
        width: 297px;
    height: 500px;
    margin-left: -37px;
    margin-top: -107px;
    }


`;