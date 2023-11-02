import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { useEffect, useState } from 'react';
import routeData from './5_fulton_data.json';
import allRouteData from './all_muni_routes.json';


function App() {

 {allRouteData.routes.map(route => {
  console.log(route.real_time_route_id + ' - ' + route.global_route_id)
 })
}
  const stops = routeData.itineraries[0].stops

  return (
      <MapContainer center={[37.78072608336038, -122.4156909109696]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {stops.map(marker => (
          <Marker key={Number.toString()} position={[marker.stop_lat, marker.stop_lon]}>
            <Popup>{marker.stop_name}</Popup>
          </Marker>
        ))
        }
      </MapContainer>
  )
}

export default App
