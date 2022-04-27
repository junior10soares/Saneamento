import React, { Fragment } from 'react';
import { Card, Image } from './styles';

export function PhotoItem({ source }) {

    return (
        <Fragment>
            <Card>
                <Image src='/example.png'></Image>
            </Card>
        </Fragment>
    );
};