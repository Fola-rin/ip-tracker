import axios from "axios";
import {
	FETCH_DATA_FAILURE,
	FETCH_DATA_REQUEST,
	FETCH_DATA_SUCCESS,
} from "./actionTypes";

export const fetchDataRequest = () => {
	return {
		type: FETCH_DATA_REQUEST,
	};
};

export const fetchDataSuccess = (data) => {
	return {
		type: FETCH_DATA_SUCCESS,
		payload: data,
	};
};
export const fetchDataFailure = (error) => {
	return {
		type: FETCH_DATA_FAILURE,
		payload: error,
	};
};
export const fetchData = (url) => {
	return (dispatch) => {
		dispatch(fetchDataRequest());
		axios
			.get(
				`https://geo.ipify.org/api/v1?apiKey=at_pv4JSpoM8JRqDdBZCL0vmh5lEpU7P&ipAddress=${url}`
			)
			.then((response) => {
				console.log(response.data.location);
				console.log(response.data);
				const isp = response.data.isp;
				const location = { ...response.data.location, url, isp };
				dispatch(fetchDataSuccess(location));
			})
			.catch((error) => {
				console.log(error.message);
				const errorMsg = error.message;
				dispatch(fetchDataFailure(errorMsg));
			});
	};
};
