import { getOrderNumber } from "../../utils/data"

export const ORDER_SENDING_REQUEST = 'ORDER_SENDING_REQUEST'
export const ORDER_SENDING_SUCCESS = 'ORDER_SENDING_SUCCESS'
export const ORDER_SENDING_FAILED = 'ORDER_SENDING_FAILED'
export const ORDER_MODAL_CLOSE = 'ORDER_MODAL_CLOSE'

export function sendingOrder(ingredientsId) {
    return function(dispatch) {
        dispatch({
           type: ORDER_SENDING_REQUEST,
        })
        getOrderNumber(ingredientsId)
        .then((res) => {
            console.log(res)
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

export function closeOrderModal() {
    return function (dispatch) {
        dispatch({
            type: ORDER_MODAL_CLOSE
        })
    }
}