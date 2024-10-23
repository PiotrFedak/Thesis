import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markersData from './markersData';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Link } from 'react-router-dom';

const Map = () => {
  const center = [38.0, -97.0];
  const zoom = 5;

  const bounds = [
    [10.0, -170.0],
    [60.0, -50.0],
  ];

  return (
    <div className="flex justify-center items-center h-full z-10 mt-28">
      <div className="w-11/12 h-5/6 mt-1 mb-36">
        <MapContainer
          center={center}
          zoom={zoom}
          className="h-full rounded-2xl"
          maxBounds={bounds}
          maxBoundsViscosity={1.0}
          minZoom={5}
          maxZoom={16}
          style={{ zIndex: 1 }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <MarkerClusterGroup disableClusteringAtZoom={6}>
            {markersData.map((marker, index) => (
              <Marker key={index} position={marker.location} icon={marker.icon}>
                <Popup>
                  <h2 className="text-center text-custom-brown font-semibold">
                    {marker.team}
                  </h2>
                  <p>{marker.address}</p>
                  <Link
                    to={`/teams/${marker.teamId}`}
                    className="text-custom-blue underline font-semibold"
                  >
                    View Team Details
                  </Link>
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
