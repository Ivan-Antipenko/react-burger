import { 
    INGREDIENTS_UPLOAD_REQUEST, 
    INGREDIENTS_UPLOAD_SUCCESS,
    INGREDIENTS_UPLOAD_FAILED 
} from "../actions/ingredients";


const initialIngredientsState = {
    burgerIngredients: [],
    isLoading: false,
    isError: false,
};



export function ingredientsReducer(state = initialIngredientsState, action) {
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