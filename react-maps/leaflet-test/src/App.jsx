import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';


function App() {

  // mock API, this where you pull the data from transit or startic info
  const stops = [
    {
      geocode: [37.78072608336038, -122.4156909109696],
      popup: 'Stop 1'
    },
    {
      geocode: [37.79008800805286, -122.3956900267082],
      popup: 'Stop 2'
    },
    {
      geocode: [37.79164383223326, -122.3981541644275],
      popup: 'Stop 3'
    },
    {
      geocode: [37.79001606242602, -122.4004923972997],
      popup: 'Stop 4'
    },
    {
      geocode: [37.78848721785568, -122.4024798952412],
      popup: 'Stop 5'
    },
  ]

  return (
      <MapContainer center={[37.78072608336038, -122.4156909109696]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {stops.map(marker => (
          <Marker key={Number.toString()} position={marker.geocode}>
          </Marker>
        ))
        }
      </MapContainer>
  )
}

export default App
