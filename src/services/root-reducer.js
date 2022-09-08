import { combineReducers } from "redux";
import { constructorReducer } from "./reducers/constructor";
import { ingredientsReducer } from "./reducers/ingredients";
import { ingredientDetailReducer } from "./reducers/ingredientsDetails";
import { orderReducer } from "./reducers/orderDetails";

export const rootReducer = combineReducers({
   ingredients: ingredientsReducer,
   ingredientDetails: ingredientDetailReducer,
   burgerConstructor: constructorReducer,
   orderDetails: orderReducer
});