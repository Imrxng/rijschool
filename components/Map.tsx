import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import L from "leaflet";
import ReactDOMServer from 'react-dom/server';

const Map = () => {

  const CUSTOM_ICON = new L.DivIcon({
    html: ReactDOMServer.renderToString(<FaMapMarkerAlt style={{ color: '#ED1C24', fontSize: '35px' }}/>),
    className: "custom-icon",
    iconSize: [35, 35]
  });

  return (
    <MapContainer center={[51.2206093675261, 4.4592743]} zoom={14} scrollWheelZoom={false} style={{ height: "500px", backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
      <TileLayer
        attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[51.2206093675261, 4.4592743]} icon={CUSTOM_ICON}>
        <Popup>
          Let's meet up!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;