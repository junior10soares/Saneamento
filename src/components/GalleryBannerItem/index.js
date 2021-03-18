import React from "react";
import { Card, Image } from "./style";

export function GalleryBannerItem({ src }) {
  return (
    <Card>
      <Image src={src ? src : "/example.png"}></Image>
    </Card>
  );
}
