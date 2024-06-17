import React from "react";
import { Card, Link, Title, Image } from "./style";
import ImagePlaceholder from "../ImagePlaceholder";
import { baseURL } from "../../services/api";

const CardConstruction = ({ image, title, link }) => {
  const hasImage = !!image;

  return (
    <>
      <Card>
        {hasImage ? (
          <Image src={baseURL + "/" + image} />
        ) : (
          <ImagePlaceholder />
        )}
        <Title>{title}</Title>
      </Card>
    </>
  );
};

export default CardConstruction;
