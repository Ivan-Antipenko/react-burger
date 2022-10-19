import { WS_CONNECTED_FAILED, WS_CONNECTED_SUCCESS, WS_GET_ORDERS, WS_CONNECTED_CLOSED } from "../actions/wsActions";

const initialState = {
    orders: [],
    isConnect: false,
    total: null,
    totalToday: null
}


export function wsReducer(state = initialState, action) {
    switch(action.type) {
        case WS_CONNECTED_SUCCESS: 
        return {
            ...state,
            isConnect: true
        }
        case WS_CONNECTED_FAILED: 
        return {
            ...state,
            isConnect: false
        }
        case WS_CONNECTED_CLOSED: 
        return {
            ...state,
            isConnect: false
        }
        case WS_GET_ORDERS:
		return {
			...state,
			orders: action.payload.orders,
			total: action.payload.total,
			totalToday: action.payload.totalToday,
		};
        default: 
        return state
        
    }
}
