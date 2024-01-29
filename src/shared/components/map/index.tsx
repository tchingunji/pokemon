import React from 'react';
import MapBox from 'react-map-gl';
import Marker, {LatLng} from './components/marker';

interface Props extends LatLng {
  markers?: LatLng[];
  registrationDate?:Date;
}

const Map: React.FC<Props> = ({lat, lng, markers = []}) => {
  const viewport = {
    latitude: lat,
    longitude: lng,
    zoom: 9,
    bearing: 0,
    pitch: 0,
  };

  return lat && lng ? (
    <MapBox
      initialViewState={viewport}
      style={{width: '100%', height: '100%'}}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={import.meta.env.VITE_MAP_BOX_KEY}>
      {markers.map((marker, index) => (
        <Marker key={index} {...marker}>
          {index + 1}
        </Marker>
      ))}
    </MapBox>
  ) : (
    <></>
  );
};

export default Map;
