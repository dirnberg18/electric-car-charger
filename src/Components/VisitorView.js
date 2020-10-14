import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import json from './data/charging-locations.json';
 
const containerStyle = {
  width: '80%',
  height: '800px',
  display: 'block'
};
 
const center = {
  lat: 65.05815,
  lng: 25.45411
};
 
function VisitorView() {
  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
 
  return (
    <div>
    <LoadScript>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
          {json.features.map((location) => (
            <Marker 
                key={location.properties.PARK_ID} 
                position={{
                    lat: location.geometry.coordinates[1],
                    lng: location.geometry.coordinates[0]
                }}
            />
        ))}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
  )
}
 
export default React.memo(VisitorView)




/*import React from 'react';
import {
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker
} from "react-google-maps";
import * as locationsData from "./charging-locations.json";

function Map() {
    return (
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat: 65.05815, lng: 25.45411}}
        >
        {locationsData.features.map((location) => (
            <Marker 
                key={location.properties.PARK_ID} 
                position={{
                    lat: location.geometry.coordinates[1],
                    lng: location.geometry.coordinates[0]
                }}
            />
        ))}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function VisitorView() {
    return (
    <div>
        <div>
            <h1>Hallo Marlene</h1>
        </div>
        <div>
        <WrappedMap 
        googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement = {<div style= {{height: `100%`}}/>}
        containerElement = {<div style= {{height: `400%`}}/>}
        mapElement = {<div style= {{height: `100%`}}/>}
        />
        </div>
    </div>
    )
  }*/