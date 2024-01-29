import React, {useState} from 'react';
import {Marker as MapMarker, Popup} from 'react-map-gl';

import {Container} from './styles';

export interface LatLng {
  lat: number;
  lng: number;
  popup?: string | React.ReactNode;
  registrationDate?:Date;
}

interface Props extends LatLng {
  children?: React.ReactNode;
}

const Marker: React.FC<Props> = ({children, lat, lng, popup, registrationDate}) => {
  const [showPopup, setShowPopup] = useState(false);  

  return (
    <>
      <MapMarker longitude={lng} latitude={lat}>
        <Container
          onClick={(e) => {
            e.stopPropagation();
            setShowPopup(true);
          }}>
          {children}
        </Container>
      </MapMarker>
      {popup && showPopup && (
        <Popup
          longitude={lng}
          latitude={lat}
          anchor="bottom"
          onClose={() => setShowPopup(false)}>
          {popup}
        </Popup>
      )}
    </>
  );
};

export default Marker;
