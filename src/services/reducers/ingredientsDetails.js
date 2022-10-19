import { INGREDIENTS_MODAL_CLOSE, INGREDIENTS_MODAL_OPENED } from "../actions/ingredientsDetails"

const initialStateModal = {
    isModalOpen: false,
    overlayOpen: false
}

export function ingredientDetailReducer(state = initialStateModal, action) {
switch(action.type) {
    case INGREDIENTS_MODAL_OPENED: {
       return {
            ...state,
            isModalOpen: true,
            overlayOpen: true,
            ingredient: action.ingredient,
       }
    }
    case INGREDIENTS_MODAL_CLOSE: {
        return {
            ...state,
            isModalOpen: false,
            overlayOpen: false,
            ingredient: null
        }
    }

    default: {
        return state
    }
    
}
}