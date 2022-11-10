import { useSelector } from "react-redux";
import { Ingredient } from "./Ingredient/Ingredient";
import ingredientDetailsStyles from "./IngredientDetails.module.css";

function IngredientDetails() {
  const item = useSelector((store) => store.ingredientDetails.ingredient);

  return (
    <div className={`${ingredientDetailsStyles.modal_wrapper} pb-15 pt-10`}>
      <div className={ingredientDetailsStyles.modal_content}>
        <h3 className={`text text_type_main-large`}>Детали ингредиента</h3>
        <img className={ingredientDetailsStyles.image} src={item.image_large} />
        <p className={`text text_type_main-medium mt-4`}>{item.name}</p>
        <ul className={`${ingredientDetailsStyles.bju_wrapper}`}>
          <Ingredient text="Калории,ккал" value={item.calories} />
          <Ingredient text="Белки, г" value={item.proteins} />
          <Ingredient text="Жиры, г" value={item.fat} />
          <Ingredient text="Углеводы, г" value={item.carbohydrates} />
        </ul>
      </div>
    </div>
  );
}

export default IngredientDetails;
