import React, { Fragment } from "react";
import { ContainerMap } from "./style";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "500px",
};

function MapComponent(props) {
  const { markers } = props;

  return (
    <ContainerMap>
      <Map
        google={props.google}
        zoom={13}
        containerStyle={containerStyle}
        initialCenter={{
          lat: -23.6666,
          lng: -46.5322,
        }}
      >
        {markers &&
          markers.map(({ name, lat, lng }) => (
            <Marker title={name} name={name} position={{ lat, lng }} />
          ))}
      </Map>
    </ContainerMap>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAywMV0CpRBF6sp7RIh5hiYYIR38IUsZgc",
})(MapComponent);
