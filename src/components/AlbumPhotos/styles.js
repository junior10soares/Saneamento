import styled from 'styled-components';
import theme from '../../GlobalStyle/theme';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
`;

export const Block = styled.div`
    width: 25%;
    position: relative;
    @media (max-width: 500px) {
        width: 50%;
    }
`;

export const Row = styled.div`
    width: 100%;
    height: auto;
    margin: 0 -${theme.spacing * 2}px;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    @media (max-width: 768px) {
        margin: 0;
    }
`;