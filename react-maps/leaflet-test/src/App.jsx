import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import routeData from './5_fulton_data.json';
import allRouteData from './all_muni_routes.json';


function App() {
  const [selectedRoute, setSelectedRoute] = useState('')
  const [jsonData, setJsonData] = useState(null);

  async function handleSelectedRoute (route) {
    setSelectedRoute(route)

    try {
      const dataModule = await import(`./${route.replace(' ', '')}.json`); // This assumes your JSON files are named 'Option1.json', 'Option2.json', etc.
      // console.log(dataModule)
      setJsonData(dataModule.default);
    } catch (error) {
      console.error("Failed to load JSON data:", error);
      setJsonData(null);
    }
  }

  useEffect(() => {
    // Reset jsonData when the selected value changes
    setJsonData(null);
  }, [selectedRoute]);

//  {allRouteData.routes.map(route => {
//   console.log(route.real_time_route_id + ' - ' + route.global_route_id)
//  })
// }
  console.log(jsonData)
  const stops = routeData.itineraries[0].stops

  return (
    <>
      <MapContainer center={[37.78072608336038, -122.4156909109696]} zoom={13} scrollWheelZoom={true}>
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

      <Dropdown routesData={allRouteData} onChange={handleSelectedRoute} />
      <p>This is: {selectedRoute}</p>
      <pre>{jsonData && JSON.stringify(jsonData, null, 2)}</pre>
    </>
  )
}

export default App
