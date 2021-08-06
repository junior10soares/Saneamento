import styled from 'styled-components';
import theme from '../../styles/theme';

export const Card = styled.div`
    border: 1px solid;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    border-color: lightgrey;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`

export const Image = styled.img`
    border-radius: 50%;
    height: 150px;
    width: 150px;
    margin: 10px;
`

export const Depoimento = styled.p`
    font-size: 19px;
    color: grey;
    font-family: 'Roboto',sans-serif;
    text-align: left;
`

export const DepoimentoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Name = styled.p`
    font-size: 15px;
    color: grey;
    font-weight: bold;
    font-family: 'Roboto',sans-serif;
    margin: 0;
`

export const Info = styled.p`
    font-size: 15px;
    color: grey;
    font-family: 'Roboto',sans-serif;
    margin-top: 0;
`