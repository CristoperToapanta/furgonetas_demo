import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

export default function MainMap() {
  const center = [0.3558, -78.1219]; // Centro de Ibarra, Imbabura, Ecuador
  const zoom = 15; // Ajusta el nivel de zoom según sea necesario

  return (
    <MapContainer
      center={center} 
      zoom={zoom}
      style={{ height: "45.5vh", width: "100%", borderWidth: 5, borderColor: 'black' }}
      worldCopyJump={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          Ibarra, Imbabura, Ecuador
        </Popup>
      </Marker>
    </MapContainer>
  );
}
