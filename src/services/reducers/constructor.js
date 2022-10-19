import { ADD_INGREDIENT, ADD_INGREDIENT_BUN, DELETE_INGREDIENT, DROP_INGREDIENT, CLEAR_INGREDIENT_LIST } from "../actions/constructor";

const initialConstructorState = {
    items: [],
    cash: 0,
    bun: false,
};

export function constructorReducer(state = initialConstructorState, action) {
    switch (action.type) {
        case ADD_INGREDIENT_BUN: {
            return {
                ...state,
                bun: action.data,
                cash: action.data.price * 2,
            }
        }
        case ADD_INGREDIENT: {
            return {
                ...state,
                items: [...state.items, action.data],
                cash: state.cash += action.data.price,
            }
        }
        case CLEAR_INGREDIENT_LIST: {
            return {
                ...state,
                items: [],
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                items: [...state.items].filter((el) => el.uniCode !== action.data.uniCode),
                cash: state.cash -= action.data.price
            }
        }
        case DROP_INGREDIENT: {
            const storage = state.items;
            const drag = action.data.dragIndex;
            const hover = action.data.hoverIndex;

            const temp = storage[drag]
            storage[drag]=storage[hover]
            storage[hover]=temp

            return {
                ...state,
                items: [...state.items]
            }
        }
        default: {
            return state;
        }
    };
}