export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const ADD_INGREDIENT_BUN = 'ADD_INGREDIENT_BUN'
export const DROP_INGREDIENT = 'MOVE_INGREDIENT_BUN'
export const CLEAR_INGREDIENT_LIST = 'CLEAR_INGREDIENT_LIST'

export function addIngredients(item, dataBun) {
   return function(dispatch){
    if (item.type === 'bun') {
        dispatch({
            type: ADD_INGREDIENT_BUN,
            data: item
        })
    } else if (item.type !== 'bun' && dataBun) {
        dispatch({
            type:ADD_INGREDIENT,
            data: { ...item, uniCode: Date.now() }
        })
    }
    }
}

export function deleteIngredient(el){
    return function(dispatch) {
        dispatch({
            type:DELETE_INGREDIENT,
            data: el
        })
    }
}
