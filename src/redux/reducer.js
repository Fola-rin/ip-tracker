import {
	FETCH_DATA_FAILURE,
	FETCH_DATA_REQUEST,
	FETCH_DATA_SUCCESS,
} from "./actionTypes";

const initialState = {
	loading: false,
	data: {},
	error: "",
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_DATA_REQUEST:
			return { ...state, loading: true };
		case FETCH_DATA_SUCCESS:
			return { loading: false, data: payload, error: "" };
		case FETCH_DATA_FAILURE:
			return { loading: false, data: {}, error: payload };
		default:
			return state;
	}
};
