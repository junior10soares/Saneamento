import React from "react";
import { Card, Image, Depoimento, Name, Info, DepoimentoInfo } from "./style";
import { ImQuotesRight } from 'react-icons/im';

export function CardDepoimento ({text, image, name, info}) {
    return (
        <Card>
            <Image src={image} alt="image" />
            <DepoimentoInfo>
                <Depoimento>{text}</Depoimento>
                <Name>{name},</Name>
                <Info>{info}.</Info>
            </DepoimentoInfo>
            <div style={{marginRight: 10, marginLeft: 25, top: 0, height: "200px"}}>
            <ImQuotesRight color="#2f80ed" size={60} />
            </div>
        </Card>
    )
}