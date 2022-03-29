import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import useGeolocation from "../Custom Hooks/useGetLocation";
import axios from "axios";

function createLocationEntry(location, index) {
  return (
    <Marker
      key={index}
      lat={location.data.summary.latitude}
      lng={location.data.summary.longitude}
      name={location.data.summary.organization_name}
    />
  );
}

function createMapOptions(maps) {
  return {
    mapTypeControl: true,
    // gestureHandling: 'greedy'
    // uncomment this to allow touch-screen users to navigate the map
    // with one finger. Default is auto, which determines if greedy is necessary on the device
  };
}

function Map() {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    axios
      .get("./premium_data.json") // this json file can be found in the frontend/public directory
      .then((response) => {
        setLocations(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const geoLoc = useGeolocation({
    //use New York as default location
    lat: 40.7128,
    lng: -74.006,
  });

  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API }}
        center={geoLoc.location}
        defaultZoom={10}
        options={createMapOptions}
      >
        {locations.map(createLocationEntry)}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
