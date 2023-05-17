
import {MapContainer, TileLayer, Marker, Popup  } from "react-leaflet";
import L from"leaflet";
import './App.css';

function App() {
  const position = [36.8065, 10.1815]

  return (
    <div className="App">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
      
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png',

})
L.Marker.prototype.options.icon = DefaultIcon;

export default App;
