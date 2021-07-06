import styled from 'styled-components';
import theme from '../../styles/theme';

export const Rounded = styled.div
`
    background-color: ${props => props.color};
    height: 50px;
    width: 50px;
    border-radius: 50%;
    color: white;

    &:before {
        color: black;
        content: "${props => props.before ? props.before : ''}"
    }

    &:after {
        color: black;
        content: "${props => props.after ? props.after : ''}"
    }
`

export const Column = styled.div
`
    flex: 1;
    flex-direction: column;
    max-width: ${theme.center}px;
    margin: 0 auto;
    display: block;
    width: 100%;
    position: relative;  
`