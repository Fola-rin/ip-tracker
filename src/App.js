import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/actions";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import MyMap from "./components/Map/Index";
import MyInput from "./components/Input";
import DetailsCard from "./components/IpDetails";
import backgroundPic from "./assets/pattern-bg.png";
function App() {
	const year = new Date().getFullYear();
	const data = useSelector((state) => state);
	const dispatch = useDispatch();
	// console.log(data);

	useEffect(() => {
		dispatch(fetchData("156.33.241.5"));
	}, []);
	const [center, setCenter] = useState([51.505, -0.09]);

	return (
		<div className="App">
			<div className="top-div">
				<h2 className="page-main-title">IP Address Tracker</h2>
				<MyInput />
				<DetailsCard />
			</div>
			<div className="my-map-container">
				<MyMap />
			</div>
			<footer>Made by Oyeleke Afolarin © {year}</footer>
		</div>
	);
}

export default App;
