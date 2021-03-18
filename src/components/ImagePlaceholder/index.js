import React from "react";

import { Container } from "./styles";
//import { ReactComponent as HelmetIcon } from "../../public/helmet.svg";

function ImagePlaceholder({ height }) {
  return (
    <Container height={height}>
      {/* This is a temporary fix just for deploy, lets fix this together later */}
      {/* {HelmetIcon && <HelmetIcon style={{ width: 60 }} />} */}
    </Container>
  );
}

export default ImagePlaceholder;
