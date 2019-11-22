import {
	GET_SERVICES,
	SET_LOADING,
	SERVICE_ERROR,
	ADD_SERVICE,
	UPDATE_SERVICE,
	DELETE_SERVICE,
	SET_CURRENT,
	CLEAR_CURRENT
} from "./types";

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

// Update service on server
export const updateService = service => async dispatch => {
	try {
		setLoading();

		const res = await fetch(`http://localhost:5000/services/${service.id}`, {
			method: "PUT",
			body: JSON.stringify(service),
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data = await res.json();

		dispatch({
			type: UPDATE_SERVICE,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: SERVICE_ERROR,
			payload: error.response.data
		});
	}
};

// Delete service from server
export const deleteService = id => async dispatch => {
	try {
		setLoading();

		await fetch(`http://localhost:5000/services/${id}`, {
			method: "DELETE"
		});

		dispatch({
			type: DELETE_SERVICE,
			payload: id
		});
	} catch (error) {
		dispatch({
			type: SERVICE_ERROR,
			payload: error.response.data
		});
	}
};

// Set current service
export const setCurrent = service => {
	return {
		type: SET_CURRENT,
		payload: service
	};
};

// Clear current service
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT
	};
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
