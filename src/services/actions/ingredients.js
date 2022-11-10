import { getData } from "../../utils/data"

export const INGREDIENTS_UPLOAD_REQUEST = 'INGREDIENTS_UPLOAD_REQUEST'
export const INGREDIENTS_UPLOAD_SUCCESS = 'INGREDIENTS_UPLOAD_SUCCESS'
export const INGREDIENTS_UPLOAD_FAILED = 'INGREDIENTS_UPLOAD_REQUEST'

export function getIngredients() {
    return function (dispatch) {
        dispatch({
            type: INGREDIENTS_UPLOAD_REQUEST
        })
         getData()
        .then((res) => {
            dispatch({
                type: INGREDIENTS_UPLOAD_SUCCESS,
                ingredients: res.data
            })
        })
        .catch(() => {
            dispatch({
                type: INGREDIENTS_UPLOAD_FAILED,
            })
        });
    }
}

