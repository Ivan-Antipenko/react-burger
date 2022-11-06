import { Dispatch } from "redux"
import { getData } from "../../utils/api"

export const INGREDIENTS_UPLOAD_REQUEST: 'INGREDIENTS_UPLOAD_REQUEST'  = 'INGREDIENTS_UPLOAD_REQUEST'
export const INGREDIENTS_UPLOAD_SUCCESS: 'INGREDIENTS_UPLOAD_SUCCESS' = 'INGREDIENTS_UPLOAD_SUCCESS'
export const INGREDIENTS_UPLOAD_FAILED: 'INGREDIENTS_UPLOAD_FAILED' = 'INGREDIENTS_UPLOAD_FAILED'

export type TIngredientsActions = | IIngredientUploadSuccess | IIngredientUploadRequest | IIngredientUploadFailed

export interface IIngredientUploadRequest {
    readonly type: typeof INGREDIENTS_UPLOAD_REQUEST;
}

export interface IIngredientUploadSuccess {
    readonly type: typeof INGREDIENTS_UPLOAD_SUCCESS;
    readonly ingredients: []
}

export interface IIngredientUploadFailed {
    readonly type: typeof INGREDIENTS_UPLOAD_FAILED;
}



export function getIngredients() {
    return function (dispatch: Dispatch) {
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

