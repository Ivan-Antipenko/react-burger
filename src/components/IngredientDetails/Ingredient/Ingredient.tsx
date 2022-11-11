import ingredientStyles from "./Ingredient.module.css";

export interface IIngrProps {
  text: string,
  value: number
}

export function Ingredient(props: IIngrProps) {
  return (
    <li className={`${ingredientStyles.bju_item} mt-8`}>
      <p className={`text text_type_main-default text_color_inactive`}>
        {props.value}
      </p>
      <p className={`text text_type_main-default text_color_inactive`}>
        {props.text}
      </p>
    </li>
  );
}
