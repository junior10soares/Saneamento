import React from "react";
import { Card, Image, Button } from "./style";
import { FaTrash } from 'react-icons/fa';
import ReactPlayer from "react-player/lazy";

export function GalleryVideoItem({ video, handleDeleteVideo }) {
  return (
    <Card>
      <ReactPlayer
        url={video.url}
        width='100%'
        height='100%'
        // controls
      />
      <Button onClick={()=>{if(confirm(`Tem certeza que deseja apagar o vídeo "${video.name}" ?`)){handleDeleteVideo(video.uuid)}}}><FaTrash /></Button>
    </Card>
    
  );
}
