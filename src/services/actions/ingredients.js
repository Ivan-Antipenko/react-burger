import { getData } from "../../utils/data"

const INGREDIENTS_UPLOAD_REQUEST = 'INGREDIENTS_UPLOAD_REQUEST'
const INGREDIENTS_UPLOAD_SUCCES = 'INGREDIENTS_UPLOAD_REQUEST'
const INGREDIENTS_UPLOAD_FAILED = 'INGREDIENTS_UPLOAD_REQUEST'

function getIngredients() {
    return function (dispatch) {
        dispatch({
            type: INGREDIENTS_UPLOAD_REQUEST
        })
        getData()
        .then((res) => {
            dispatch({
                type: INGREDIENTS_UPLOAD_SUCCES,
                ingredients: res.data,
            })
        })
        .catch(() => {
            dispatch({
                type: INGREDIENTS_UPLOAD_FAILED,
            })
        });
    }
}


export {INGREDIENTS_UPLOAD_REQUEST, INGREDIENTS_UPLOAD_SUCCES, INGREDIENTS_UPLOAD_FAILED, getIngredients}