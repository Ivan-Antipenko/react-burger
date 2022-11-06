import { IDropObject, IItem } from "../types"

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT'
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT'  = 'DELETE_INGREDIENT'
export const ADD_INGREDIENT_BUN: 'ADD_INGREDIENT_BUN'  = 'ADD_INGREDIENT_BUN'
export const DROP_INGREDIENT: 'DROP_INGREDIENT' = 'DROP_INGREDIENT'
export const CLEAR_INGREDIENT_LIST: 'CLEAR_INGREDIENT_LIST' = 'CLEAR_INGREDIENT_LIST'


export type TConstructorActions = | IAddIngredient | IAddBun | IDeleteIngredient | IResetConstructor | IDropIngredient

export interface IAddIngredient {
    readonly type: typeof ADD_INGREDIENT;
    readonly data: IItem
}

export interface IAddBun {
    readonly type: typeof ADD_INGREDIENT_BUN;
    readonly data: IItem
}

export interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT;
    readonly data: IItem
}

export interface IDropIngredient {
    readonly type: typeof DROP_INGREDIENT;
    readonly data: IDropObject
}

export interface IResetConstructor {
    readonly type: typeof CLEAR_INGREDIENT_LIST;
}

export const addBun = (item: IItem): IAddBun => ({
    type: ADD_INGREDIENT_BUN,
    data: item
})

export const addIngredient = (item: IItem): IAddIngredient => ({
    type: ADD_INGREDIENT,
    data: {...item, uniCode: Date.now()}
})

export const deleteIngredient = (el: IItem): IDeleteIngredient => ({
    type: DELETE_INGREDIENT,
    data: el
})

export const dropIngredient = (obj: IDropObject): IDropIngredient => ({
    type: DROP_INGREDIENT,
    data: obj
})

export const resetConstructor = (): IResetConstructor => ({
    type: CLEAR_INGREDIENT_LIST
})
