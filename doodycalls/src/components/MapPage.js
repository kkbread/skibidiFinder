import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import savedPlaces from "../assets/savedPlaces.json";

const GOOGLE_MAPS_API_KEY = "AIzaSyBIP6Hf1fOfq9K3LhtORzOAJVmNAwp1peE";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 40.7582666,
  lng: -73.9779907, // Center of NYC
};

function MapPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces(savedPlaces.features.slice(0, 4)); // Safely slice the first 4 features
  }, []);

  return (
    <div className="map-page">
      <div className="stats">
        <h2>12,869,323</h2>
        <p>Total Visits</p>
        <p>↑ 12% since last week</p>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Find name or place..." />
      </div>

      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
          {savedPlaces.features.map((place, index) => {
            const { geometry, properties } = place;
            const { coordinates } = geometry || {};
            const { location } = properties || {};
            const name = location?.name;

            // Skip if coordinates or name are missing
            if (!coordinates || !name) return null;

            return (
              <Marker
                key={index}
                position={{ lat: coordinates[1], lng: coordinates[0] }}
                title={name}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>

      <div className="bathroom-cards">
        {places.map((place, index) => {
          const { properties } = place;
          const { location } = properties || {};
          const { name, address } = location || {};
          const googleMapsUrl = properties?.google_maps_url;

          // Skip if location or name is missing
          if (!name || !address) return null;

          return (
            <div className="bathroom-card" key={index}>
              <h3>{name}</h3>
              <p>{address}</p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MapPage;
