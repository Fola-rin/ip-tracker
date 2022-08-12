import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/actions";

import "./style.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const MyInput = () => {
	const [ip, setIp] = useState("");

	const dispatch = useDispatch();

	return (
		<div className="input-container">
			<input
				value={ip}
				onChange={(e) => setIp(e.target.value)}
				placeholder="Search for any IP address or domain"
			/>{" "}
			<button
				onClick={() => {
					dispatch(fetchData(ip));
				}}
			>
				<ArrowForwardIosIcon />
			</button>
		</div>
	);
};

export default MyInput;
