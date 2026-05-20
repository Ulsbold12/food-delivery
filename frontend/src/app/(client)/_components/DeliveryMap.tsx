"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface DeliveryMapProps {
  value: string;
  onChange: (value: string) => void;
}

function LocationMarker({ onChange }: { onChange: (value: string) => void }) {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      setPosition(e.latlng);

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=mn`
        );
        const data = await res.json();
        onChange(data.display_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`);
      } catch {
        onChange(`${lat.toFixed(4)}, ${lng.toFixed(4)}`);
      }
    },
  });

  return position ? <Marker position={position} icon={markerIcon} /> : null;
}

export default function DeliveryMap({ value, onChange }: DeliveryMapProps) {
  return (
    <>
      <MapContainer
        center={[47.9185, 106.9176]}
        zoom={13}
        className="w-full h-50 rounded-lg border border-gray-300 z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onChange={onChange} />
      </MapContainer>
      <div className="mt-2 px-1">
        {value ? (
          <p className="text-xs text-gray-700">{value}</p>
        ) : (
          <p className="text-xs text-gray-400">Газрын зураг дээр дарж хаягаа сонгоно уу</p>
        )}
      </div>
    </>
  );
}
