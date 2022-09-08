export const INGREDIENTS_MODAL_OPENED = 'INGREDIENTS_MODAL_OPENED'
export const INGREDIENTS_MODAL_CLOSE = 'INGREDIENTS_MODAL_CLOSE'


export function openModal(ingredient) {
    return function (dispatch) {
        dispatch({
            type: INGREDIENTS_MODAL_OPENED,
            ingredient: ingredient
        })
    }
}

export function closeIngredientModal() {
    return function (dispatch) {
        dispatch({
            type: INGREDIENTS_MODAL_CLOSE
        })
    }
}