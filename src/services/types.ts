import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
  } from "react-redux";
import { store } from '../index'
import { TConstructorActions } from './actions/constructor';
import { TIngredientsActions } from './actions/ingredients';
import { TOrderDetailsActions } from './actions/orderDetails';
import { TRegisterActions } from './actions/register';
import { TWsActions } from './actions/wsActions';
import { rootReducer } from './root-reducer';
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
export const useDispatch = () => dispatchHook<AppDispatch & AppThunk>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export type TApplicationActions = 
| TConstructorActions
| TIngredientsActions
| TIngredientsActions
| TOrderDetailsActions
| TRegisterActions
| TWsActions

export interface IItem {
    type: "bun" | "main" | "sauce";
    name: string;
    price: number;
    _id: string;
    __v: number;
    id?: string;
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    proteins: number;
    uniCode? : number | string
};

export interface IWsOrder {
    createdAt: string;
    ingredients: string[];
    name: string;
    number: number;
    status: string;
    updatedAt: string;
    _id: string;
};

export interface IWsOrders {
    orders: IWsOrder[],
    success: boolean,
    total: number,
    totalToday: number,
}

export type TOrderNumber = null | number;

export interface IComponentProps {
    children: React.ReactNode;
    path?: string
}

export interface IOrderProps {
    order: IWsOrder
}