import {ORDER_SENDING_FAILED, ORDER_SENDING_REQUEST, ORDER_SENDING_SUCCESS, ORDER_MODAL_CLOSE, TOrderDetailsActions} from '../actions/orderDetails'
import { TOrderNumber } from '../types'

export interface IInitialState {
    orderNumber: TOrderNumber,
    isModalOpen: boolean,
    isLoading: boolean,
    isError: boolean
}


const initialState: IInitialState = {
    orderNumber: null,
    isModalOpen: false,
    isLoading: false,
    isError: false,
}

export function orderReducer(state = initialState, action: TOrderDetailsActions): IInitialState {
   switch (action.type) {
    case ORDER_SENDING_REQUEST: {
        return {
            ...state,
           isLoading: true
        }
    }
    case ORDER_SENDING_SUCCESS: {
        return {
            ...state, 
            isLoading: false,
            orderNumber: action.data,
            isModalOpen: true
        }
    }
    case ORDER_SENDING_FAILED: {
        return {
            ...state,
            isError: true
        }
    }
    case ORDER_MODAL_CLOSE: {
        return {
            ...state,
            isModalOpen: false
        }
    }
    default: {
        return state
    }
   }
}