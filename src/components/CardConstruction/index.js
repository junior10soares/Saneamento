import React from "react";
import { Card, Link, Title, Image } from "./style";
import ImagePlaceholder from "../ImagePlaceholder";

const CardConstruction = ({ image, title, link }) => {

  const baseUrl = "https://api-sanear.cityconnect.com.br";
  const hasImage = !!image;
  
  return (
    <>
      <Card>
        {hasImage ? (
          <Image src={baseUrl + "/" + image} />
        ) : (
          <ImagePlaceholder />
        )}
        <Title>{title}</Title>
      </Card>
    </>
  );
}

export default CardConstruction
