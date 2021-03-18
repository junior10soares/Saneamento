import React from 'react';
import { Card } from './style';
import ReactPlayer from "react-player/lazy";

export function VideoItem({ video }) {
    return (
      <>
        <Card>
          <ReactPlayer url={video?.url} width="100%" height="100%" controls />
        </Card>
      </>
    );
};