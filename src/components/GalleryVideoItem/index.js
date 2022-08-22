import React from "react";
import { Card, Image } from "./style";
import ReactPlayer from "react-player/lazy";

export function GalleryVideoItem({ video }) {
  return (
    <Card>
      <ReactPlayer
        url={video.url}
        width='100%'
        height='100%'
        controls
      />
    </Card>
  );
}
