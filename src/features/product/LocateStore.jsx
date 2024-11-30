/* eslint-disable no-unused-vars */
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function LocateStore() {
  const [mapPosition, setMapPosition] = useState([23.2328, 77.4302]);

  return (
    <>
      <div className="flex h-screen bg-zinc-300 p-8">
        <div>
          <h2 className="mt-6 px-10 text-center text-4xl font-bold text-green-700">
            Find Your Store Near You
          </h2>
          <p className="mx-9 px-5 text-center text-sm text-lime-800">
            We are here to help you find the perfect store near you.
          </p>
          <p className="mx-9 mt-8 px-5 text-sm text-lime-800">
            Store Address at Bhopal:{" "}
          </p>
        </div>
        <MapContainer center={mapPosition} zoom={15} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mapPosition}>
            <Popup>Our Location in Your City</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default LocateStore;
