import ingredientStyles from "./Ingredient.module.css";

export function Ingredient(props) {
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
