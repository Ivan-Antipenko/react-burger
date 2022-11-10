import { IItem } from "../types"

export const INGREDIENTS_MODAL_OPENED: 'INGREDIENTS_MODAL_OPENED' = 'INGREDIENTS_MODAL_OPENED'
export const INGREDIENTS_MODAL_CLOSE: 'INGREDIENTS_MODAL_CLOSE' = 'INGREDIENTS_MODAL_CLOSE'

export type TIngredientsModalActions = | IOpenIngrModal | ICloseIngrModal

export interface IOpenIngrModal  {
    readonly type: typeof INGREDIENTS_MODAL_OPENED
    readonly ingredient: IItem
}

export interface ICloseIngrModal  {
    readonly type: typeof INGREDIENTS_MODAL_CLOSE
}

export const openModal = (ingredient: IItem): IOpenIngrModal => ({
    type: INGREDIENTS_MODAL_OPENED,
    ingredient: ingredient,
})

export const closeIngredientModal = (): ICloseIngrModal => ({
    type: INGREDIENTS_MODAL_CLOSE
})