import React from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from './Navbar';

const Map = () => {
  const center = [38.0, -97.0];
  const zoom = 2;

  return (
    <div className="h-screen overflow-hidden text-custom-black dark:text-white dark:bg-custom-black bg-white">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <div className="w-11/12 h-5/6 mt-1 mb-36">
          <MapContainer
            center={center}
            zoom={zoom}
            className="h-full rounded-2xl"
            maxBoundsViscosity={0.9}
            minZoom={5}
            maxZoom={16}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LayersControl position="topright"></LayersControl>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
