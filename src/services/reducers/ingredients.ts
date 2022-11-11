import { 
    INGREDIENTS_UPLOAD_REQUEST, 
    INGREDIENTS_UPLOAD_SUCCESS,
    INGREDIENTS_UPLOAD_FAILED, 
    TIngredientsActions
} from "../actions/ingredients";
import { IItem } from "../types";


export interface IInitialIngredientsState {
    burgerIngredients: IItem[],
    isLoading: boolean,
    isError: boolean
}

const initialIngredientsState: IInitialIngredientsState = {
    burgerIngredients: [],
    isLoading: false,
    isError: false,
};



export function ingredientsReducer(state = initialIngredientsState, action: TIngredientsActions): IInitialIngredientsState {
    switch (action.type) {
        case INGREDIENTS_UPLOAD_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        }
        case INGREDIENTS_UPLOAD_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                burgerIngredients: action.ingredients,
            }
        }
        case INGREDIENTS_UPLOAD_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }
        default: {
            return state;
        }
    }
}