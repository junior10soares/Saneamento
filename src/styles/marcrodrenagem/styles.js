import styled from 'styled-components'
import theme from '../theme';


export const Title = styled.h1`
 
    color: ${props => props.light ? '#ffffff' : theme.textColor};
    display: block;
    font-size: 36px;
    line-height: 1.2;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: ${props => props.center ? 'center' : 'left'};
    @media (max-width: 768px) {
        width: 100%;
        font-size: 24px;
        margin: ${theme.spacing * 2}px 0;
    }
`;