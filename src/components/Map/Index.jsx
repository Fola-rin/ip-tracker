import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MyMap = () => {
	const data = useSelector((state) => state);
	// console.log(data);

	useEffect(() => {}, []);
	return (
		<>
			{data.loading ? (
				<h2>Loading ...</h2>
			) : data.error ? (
				<h2> ☠️{data.error} ☠️</h2>
			) : Object.keys(data.data).length === 0 ? (
				<h2> Please enter your Ip</h2>
			) : (
				<MapContainer
					center={[data.data.lat, data.data.lng]}
					zoom={6}
					style={{ width: "100%", height: "100%" }}
				>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[data.data.lat, data.data.lng]}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			)}
		</>
	);
};

export default MyMap;

// const center = [51.505, -0.09]
// const zoom = 13

// function DisplayPosition({ map }) {
//   const [position, setPosition] = useState(map.getCenter())

//   const onClick = useCallback(() => {
//     map.setView(center, zoom)
//   }, [map])

//   const onMove = useCallback(() => {
//     setPosition(map.getCenter())
//   }, [map])

//   useEffect(() => {
//     map.on('move', onMove)
//     return () => {
//       map.off('move', onMove)
//     }
//   }, [map, onMove])

//   return (
//     <p>
//       latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
//       <button onClick={onClick}>reset</button>
//     </p>
//   )
// }

// function ExternalStateExample() {
//   const [map, setMap] = useState(null)

//   const displayMap = useMemo(
//     () => (
//       <MapContainer
//         center={center}
//         zoom={zoom}
//         scrollWheelZoom={false}
//         whenCreated={setMap}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//       </MapContainer>
//     ),
//     [],
//   )

//   return (
//     <div>
//       {map ? <DisplayPosition map={map} /> : null}
//       {displayMap}
//     </div>
//   )
// }

// render(<ExternalStateExample />)
