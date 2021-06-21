import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchData } from "../../redux/actions";

import "./style.css";

const DetailsCard = () => {
	const data = useSelector((state) => state);
	console.log(data.data);

	const [outPutInfo, setOutPutInfo] = useState({
		ip: "Enter your Ip Address",
		Location: "No info :(",
		TimeZone: "No info :(",
		ISP: "No info :(",
	});
	console.log(outPutInfo);

	useEffect(() => {
		{
			if (data.loading) {
				setOutPutInfo({
					ip: "Loading...",
					Location: `Loading...`,
					TimeZone: "Loading...",
					ISP: "Loading...",
				});
			}
			data.error
				? setOutPutInfo({
						ip: "Oops, an error occured",
						Location: `Oops, an error occured`,
						TimeZone: "Oops, an error occured",
						ISP: "Oops, an error occured",
				  })
				: data.data.url &&
				  setOutPutInfo({
						ip: data.data.url,
						Location: `${data.data.region}, ${data.data.country}`,
						TimeZone: `UTC ${data.data.timezone}`,
						ISP: data.data.isp,
				  });
		}
	}, [data.loading, data.error, data.data.url]);
	return (
		<div className="card-container">
			<div className="card-wrapper">
				<div className="card-item">
					<h4 className="title">IP ADDRESS</h4>
					<h2 className="info">{outPutInfo.ip}</h2>
				</div>
				<div className="line" />
				<div className="card-item">
					<h4 className="title">LOCATION</h4>
					<h2 className="info">{outPutInfo.Location}</h2>
				</div>
				<div className="line" />
				<div className="card-item">
					<h4 className="title">TIMEZONE</h4>
					<h2 className="info">{outPutInfo.TimeZone}</h2>
				</div>
				<div className="line" />
				<div className="card-item last">
					<h4 className="title">ISP</h4>
					<h2 className="info">{outPutInfo.ISP}</h2>
				</div>
			</div>
		</div>
	);
};

export default DetailsCard;
