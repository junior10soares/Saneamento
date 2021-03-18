import React from 'react';
import { CardContainer,Title } from './style';

export function CardImageLink({ theme, children, image, link }) {

    return (
        <CardContainer>
            <img src={image} alt='Banner Sanear' height='280' width='300'/>
            <Title theme={theme} href={link}> {children} </Title>
        </CardContainer>
    );
};