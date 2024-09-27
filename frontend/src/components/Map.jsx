import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import markersData from './markersData';

const Map = () => {
  const center = [38.0, -97.0];
  const zoom = 5;

  return (
    <div className="flex justify-center items-center h-full z-10">
      <div className="w-11/12 h-5/6 mt-1 mb-36">
        <MapContainer
          center={center}
          zoom={zoom}
          className="h-full rounded-2xl"
          maxBoundsViscosity={0.9}
          minZoom={5}
          maxZoom={16}
          style={{ zIndex: 1 }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <MarkerClusterGroup>
            {markersData.map((marker, index) => (
              <Marker key={index} position={marker.location} icon={marker.icon}>
                <Popup>
                  <h2 className="text-center text-custom-brown font-semibold">
                    {marker.team}
                  </h2>
                  <p>{marker.address}</p>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
