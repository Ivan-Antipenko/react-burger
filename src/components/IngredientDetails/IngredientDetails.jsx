import { useSelector } from "react-redux";
import ingredientStyles from "./IngredientDetails.module.css";

function IngredientDetails() {
  const item = useSelector((store) => store.ingredientDetails.ingredient);

  console.log(item);

  return (
    <div className={`${ingredientStyles.modal_wrapper} pb-15 pt-10`}>
      <div className={ingredientStyles.modal_content}>
        <h3 className={`text text_type_main-large`}>Детали ингредиента</h3>
        <img className={ingredientStyles.image} src={item.image_large} />
        <p className={`text text_type_main-medium mt-4`}>{item.name}</p>
        <ul className={`${ingredientStyles.bju_wrapper}`}>
          <Ingredient text="Калории,ккал" value={item.calories} />
          <Ingredient text="Белки, г" value={item.proteins} />
          <Ingredient text="Жиры, г" value={item.fat} />
          <Ingredient text="Углеводы, г" value={item.carbohydrates} />
        </ul>
      </div>
    </div>
  );
}

function Ingredient(props) {
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

export default IngredientDetails;
