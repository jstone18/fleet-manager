import {
	GET_SERVICES,
	SET_LOADING,
	SERVICE_ERROR,
	ADD_SERVICE,
	DELETE_SERVICE,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_SERVICE
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
		case UPDATE_SERVICE:
			return {
				...state,
				services: state.services.map(service =>
					service.id === action.payload.id ? action.payload : service
				)
			};
		case DELETE_SERVICE:
			return {
				...state,
				service: state.services.filter(
					service => service.id !== action.payload
				),
				loading: false
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
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
