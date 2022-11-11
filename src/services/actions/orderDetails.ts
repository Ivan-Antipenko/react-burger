import { Dispatch } from "redux"
import { getOrderNumber } from "../../utils/api"
import { AppDispatch, AppThunk } from "../types"
import { CLEAR_INGREDIENT_LIST } from "./constructor"

export const ORDER_SENDING_REQUEST: 'ORDER_SENDING_REQUEST'  = 'ORDER_SENDING_REQUEST'
export const ORDER_SENDING_SUCCESS: 'ORDER_SENDING_SUCCESS' = 'ORDER_SENDING_SUCCESS'
export const ORDER_SENDING_FAILED: 'ORDER_SENDING_FAILED' = 'ORDER_SENDING_FAILED'
export const ORDER_MODAL_CLOSE: 'ORDER_MODAL_CLOSE' = 'ORDER_MODAL_CLOSE'


export type TOrderDetailsActions = | IOrderRequest | IOrderSuccess | IOrderFailed | IOrderModalClose

export interface IOrderRequest {
    readonly type: typeof ORDER_SENDING_REQUEST
}

export interface IOrderSuccess {
    readonly type: typeof ORDER_SENDING_SUCCESS
    readonly data: number
}

export interface IOrderFailed {
    readonly type: typeof ORDER_SENDING_FAILED
}

export interface IOrderModalClose {
    readonly type: typeof ORDER_MODAL_CLOSE
}


export const sendingOrder: AppThunk = (ingredientsId: number) => {
    return function(dispatch: AppDispatch) {
        dispatch({
           type: ORDER_SENDING_REQUEST,
        })
        dispatch({
            type: CLEAR_INGREDIENT_LIST,
         })
        getOrderNumber(ingredientsId)
        .then((res) => {
            dispatch({
                type: ORDER_SENDING_SUCCESS,
                data: res.order.number
            })
        })
        .catch(() => {
            dispatch({
                type: ORDER_SENDING_FAILED
            })
        })
    }
}

export const closeOrderModal = (): IOrderModalClose => ({
    type: ORDER_MODAL_CLOSE
})