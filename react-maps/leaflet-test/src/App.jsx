import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import routeData from './assets/1.json';
import allRouteData from './all_muni_routes.json';


function App() {
  const [selectedRoute, setSelectedRoute] = useState('')
  const [jsonData, setJsonData] = useState(routeData);

  console.log(jsonData)

  useEffect(() => {
    if (selectedRoute) {
        import(`./assets/${selectedRoute}.json`) 
            .then((module) => {
                setJsonData(module.default);
            })
            .catch((error) => {
                console.error("Failed to load JSON", error);
            });
    }
}, [selectedRoute]);

const handleDropdownChange = (value) => {
  setSelectedRoute(value);
};


//  {allRouteData.routes.map(route => {
//   console.log(route.real_time_route_id + ' - ' + route.global_route_id)
//  })
// }
  // const stops = routeData.itineraries[0].stops
  const stops = jsonData.itineraries[0].stops

  return (
    <>
      <MapContainer center={[37.782197, -122.447034]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {stops.map((marker, index) => (
          <Marker key={index} position={[marker.stop_lat, marker.stop_lon]}>
            <Popup>{marker.stop_name}</Popup>
          </Marker>
        ))
        }
      </MapContainer>

      <Dropdown routesData={allRouteData} onChange={handleDropdownChange} />
      <p>This is: {selectedRoute}</p>
      {/* <pre>{jsonData && JSON.stringify(jsonData, null, 2)}</pre> */}
    </>
  )
}

export default App
