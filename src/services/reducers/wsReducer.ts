import { WS_CONNECTION_FAILED, WS_CONNECTION_SUCCESS, WS_GET_ORDERS, WS_CONNECTION_CLOSED, TWsActions } from "../actions/wsActions";
import { IItem, TOrderNumber } from "../types";

export interface IInitialState {
    orders: IItem[],
    isConnect: boolean,
    isError: boolean,
    total: TOrderNumber,
    totalToday: TOrderNumber
}


const initialState: IInitialState = {
    orders: [],
    isConnect: false,
    isError: false,
    total: null,
    totalToday: null
}


export function wsReducer(state = initialState, action: TWsActions): IInitialState {
    switch(action.type) {
        case WS_CONNECTION_SUCCESS: 
        return {
            ...state,
            isConnect: true
        }
        case WS_CONNECTION_FAILED: 
        return {
            ...state,
            isConnect: false,
            isError: true
        }
        case WS_CONNECTION_CLOSED: 
        return {
            ...state,
            isConnect: false
        }
        case WS_GET_ORDERS:
            console.log(action.data)
           return state
		// return {
		// 	...state,
		// 	orders: action.data.orders,
		// 	total: action.data.total,
		// 	totalToday: action.data.totalToday,
		// };
        default: 
        return state
        
    }
}
