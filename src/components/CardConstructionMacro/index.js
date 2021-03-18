import React from "react";
import { Card, Title, Image } from "./style";
import ImagePlaceholder from "../ImagePlaceholder";

export function CardConstructionMacro({ image, title, link }) {

  const hasImage = !!image;
  const baseUrl = "https://api-sanear.cityconnect.com.br"

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
