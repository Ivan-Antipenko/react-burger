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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
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

export type TBun = Boolean | Object;
export type TIngrModal = null | Object;
export type TOrderNumber = null | number;

export interface IDropObject {
    dragIndex: number,
    hoverIndex: number
}

export interface IUserInfo {
    success: boolean,
    accessToken: string,
    refreshToken: string,
    user: {
        email: string,
        name: string
    }
}

export interface IChangeUserInfo {
        email: string,
        name: string  
}

export interface IUpdateToken {
    success: boolean,
    accessToken: string,
    refreshToken: string
}

export interface IWsActions {
    wsInit: string;
    wsSendMessage: string;
    onOpen: string;
    onClose: string;
    onError: string;
    onMessage: string;
}



