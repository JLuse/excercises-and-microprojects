import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./App.css";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const stops = [
    {lat: 37.78072608336038, lng: -122.4156909109696},
    {lat: 37.79008800805286, lng: -122.3956900267082},
    {lat: 37.79164383223326, lng: -122.3981541644275},
    {lat: 37.79001606242602, lng: -122.4004923972997},
    {lat: 37.78848721785568, lng: -122.4024798952412},
  ]

  const onLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    stops?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap mapContainerClassName="map-container" onLoad={onLoad}>
          {/* {stops.map(({ lat, lng }) => (
            <Marker 
              key={`${lat}-${lng}`} 
              position={{ lat, lng }} 
              icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
            />
          ))} */}
          <Marker position={{ lat: 37.78072608336038, lng: -122.4156909109696 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default App;