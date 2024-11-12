import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Link } from 'react-router-dom';
import { Icon } from 'leaflet';
import axiosClientWeb from '../lib/axiosClientWeb';

const Map = () => {
  const [teamData, setTeamData] = useState([]);
  const center = [38.0, -97.0];
  const zoom = 5;
  const bounds = [
    [10.0, -170.0],
    [60.0, -50.0],
  ];

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axiosClientWeb.get('/api/teams');
        setTeamData(response.data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeams();
  }, []);

  const createIcon = (iconUrl) =>
    new Icon({
      iconUrl: iconUrl || '',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

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
            {teamData.map((team) => {
              const parsedLocation = JSON.parse(team.location || '[]');
              const position =
                Array.isArray(parsedLocation) && parsedLocation.length === 2
                  ? parsedLocation
                  : [0, 0];

              return (
                <Marker
                  key={team.team_id}
                  position={position}
                  icon={createIcon(team.icon_url)}
                >
                  <Popup>
                    <h2 className="text-center text-custom-brown font-semibold">
                      {team.name}
                    </h2>
                    <p>{team.address}</p>
                    <Link
                      to={`/teams/${team.team_id}`}
                      className="text-custom-blue underline font-semibold"
                    >
                      View Team Details
                    </Link>
                  </Popup>
                </Marker>
              );
            })}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
