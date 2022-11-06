import { INGREDIENTS_MODAL_CLOSE, INGREDIENTS_MODAL_OPENED, TIngredientsModalActions } from "../actions/ingredientsDetails"
import { TIngrModal } from "../types"


export interface IInitialStateModal  {
    isModalOpen: boolean,
    overlayOpen: boolean,
    ingredient: TIngrModal
}

const initialStateModal: IInitialStateModal = {
    isModalOpen: false,
    overlayOpen: false,
    ingredient: null,
}

export function ingredientDetailReducer(state = initialStateModal, action: TIngredientsModalActions): IInitialStateModal {
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