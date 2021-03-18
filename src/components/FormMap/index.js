import React, { Fragment, useCallback, useEffect, useState } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "500px",
};

function MapComponent(props) {
  const { handleMouseClick } = props;

  const [marker, setMarker] = useState({
    lat: -23.6666,
    lng: -46.5322,
  });

  const handleMarkerChange = useCallback((_, __, event) => {
    const { lat, lng } = handleMouseClick(event);
    setMarker({ lat, lng });
  });

  return (
    <Fragment>
      <Map
        google={props.google}
        zoom={12}
        containerStyle={containerStyle}
        initialCenter={{
          lat: -23.6666,
          lng: -46.5322,
        }}
        onClick={handleMarkerChange}
      >
        <Marker
          title={"Custom Place"}
          name={"Custom Place"}
          position={marker}
        />
      </Map>
    </Fragment>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAywMV0CpRBF6sp7RIh5hiYYIR38IUsZgc",
})(MapComponent);
