import styled from 'styled-components';
import theme from '../../styles/theme';

export const CardContainer = styled.div`
    max-width: 33%;
    flex: 1;
    position: relative;
    img {
        width: 100% !important;
        object-fit: cover;
        display: block;
    }
    div {
        width: 100%;
    }
    @media(max-width: 768px){
        max-width: 100%;
    }
`;

export const Title = styled.a`
    max-width: 100%;
    position: relative;
    background: ${(props) => theme.colors[props.theme].normal };
    display: block;
    padding: ${theme.spacing * 4}px;
    color: #ffffff;
    font-size: 23px;
    margin-top: -5px;
    text-decoration: none;
    * {
        margin: 0;
        text-decoration: none;
    }
    strong {
        display: block;
    }
    @media (max-width: 768px) {
        font-size: 18px;
        padding: ${theme.spacing * 2}px;
    }
    @media (max-width: 500px) {
        font-size: 13px;
        padding: ${theme.spacing}px;
    }
    @media (max-width: 1180px) {
        font-size: 20px;
        padding: ${theme.spacing}px;
    }
`;
