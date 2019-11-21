import {
	GET_SERVICES,
	SET_LOADING,
	SERVICE_ERROR,
	ADD_SERVICE
} from "../actions/types";

const initialState = {
	services: null,
	current: null,
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_SERVICES:
			return {
				...state,
				services: action.payload,
				loading: false
			};
		case ADD_SERVICE:
			return {
				...state,
				services: [...state.services, action.payload],
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case SERVICE_ERROR:
			console.log(action.payload);
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
