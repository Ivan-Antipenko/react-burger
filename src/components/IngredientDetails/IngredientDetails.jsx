import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Ingredient } from "./Ingredient/Ingredient";

import ingredientDetailsStyles from "./IngredientDetails.module.css";

function IngredientDetails() {
  const data = useSelector((store) => store.ingredients.burgerIngredients);
  const { id } = useParams();
  const item = data?.find((el) => el._id === id);

  return (
    <>
      {item && (
        <div className={ingredientDetailsStyles.background}>
          <div
            className={`${ingredientDetailsStyles.modal_wrapper} pb-15 pt-10`}
          >
            <div className={ingredientDetailsStyles.modal_content}>
              <h3 className={`text text_type_main-large`}>
                Детали ингредиента
              </h3>
              <img
                className={ingredientDetailsStyles.image}
                src={item.image_large}
              />
              <p className={`text text_type_main-medium mt-4`}>{item.name}</p>
              <ul className={`${ingredientDetailsStyles.bju_wrapper}`}>
                <Ingredient text="Калории,ккал" value={item.calories} />
                <Ingredient text="Белки, г" value={item.proteins} />
                <Ingredient text="Жиры, г" value={item.fat} />
                <Ingredient text="Углеводы, г" value={item.carbohydrates} />
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IngredientDetails;
