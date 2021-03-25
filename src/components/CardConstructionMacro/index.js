import React from "react";
import { Card, Title, Image } from "./style";
import ImagePlaceholder from "../ImagePlaceholder";
import {baseURL} from '../../services/api';

export function CardConstructionMacro({ image, title, link }) {

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
}
