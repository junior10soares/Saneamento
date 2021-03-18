import styled from 'styled-components';
import theme from '../../styles/theme';

export const Card = styled.div`
    width: 96%;
    height: 300px;
    padding-left: 40px;
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
  height: 320px;
  opacity: 0.7;
  display: block;
  object-fit: cover;
`;