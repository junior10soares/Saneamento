import styled from 'styled-components';
import { Column, Row, TitleSection } from '../../styles/styles';
import theme from '../../styles/theme';

export const Heading = styled.header`
    text-align: center;
    margin: 0 auto;
    width: 100%;
    max-width: ${theme.center}px;
    ${TitleSection} {
        margin-bottom: ${theme.spacing * 3}px;
    }
    ${Row} {
        margin: 0 ${theme.spacing}px;
    }
    ${Column} {
        padding: 0 ${theme.spacing}px;
    }
`;
