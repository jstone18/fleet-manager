import { GET_SERVICES, SET_LOADING, SERVICE_ERROR, ADD_SERVICE } from "./types";

// export const getServices = () => {
// 	return async dispatch => {
// 		setLoading();

// 		const res = await fetch("http://localhost:5000/services");
// 		const data = await res.json();

// 		dispatch({
// 			type: GET_SERVICES,
// 			payload: data
// 		});
// 	};
// };

// Get services from server
export const getServices = () => async dispatch => {
	try {
		setLoading();

		const res = await fetch("http://localhost:5000/services");
		const data = await res.json();

		dispatch({
			type: GET_SERVICES,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: SERVICE_ERROR,
			payload: error.response.data
		});
	}
};

// Add new service
export const addService = service => async dispatch => {
	try {
		setLoading();

		const res = await fetch("http://localhost:5000/services", {
			method: "POST",
			body: JSON.stringify(service),
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data = await res.json();

		dispatch({
			type: ADD_SERVICE,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: SERVICE_ERROR,
			payload: error.response.data
		});
	}
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
