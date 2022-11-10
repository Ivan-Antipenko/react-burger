import { combineReducers } from "redux";
import { constructorReducer } from "./reducers/constructor";
import { ingredientsReducer } from "./reducers/ingredients";
import { ingredientDetailReducer } from "./reducers/ingredientsDetails";
import { orderReducer } from "./reducers/orderDetails";
import { authReducer } from "./reducers/register";

export const rootReducer = combineReducers({
   ingredients: ingredientsReducer,
   ingredientDetails: ingredientDetailReducer,
   burgerConstructor: constructorReducer,
   orderDetails: orderReducer,
   register: authReducer
});