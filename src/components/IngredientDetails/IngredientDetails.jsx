import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ingredientStyles from "./IngredientDetails.module.css";

function IngredientDetails({ data }) {
  return (
    <div className={`${ingredientStyles.modal_wrapper} pb-15 pt-10`}>
      <div className={ingredientStyles.modal_content}>
        <h3 className={`text text_type_main-large`}>Детали ингредиента</h3>
        <img className={ingredientStyles.image} src={data.image_large} />
        <p className={`text text_type_main-medium mt-4`}>{data.name}</p>
        <ul className={`${ingredientStyles.bju_wrapper}`}>
          <Ingredient text="Калории,ккал" value={data.calories} />
          <Ingredient text="Белки, г" value={data.proteins} />
          <Ingredient text="Жиры, г" value={data.fat} />
          <Ingredient text="Углеводы, г" value={data.carbohydrates} />
        </ul>
      </div>
    </div>
  );
}

function Ingredient(data) {
  return (
    <li className={`${ingredientStyles.bju_item} mt-8`}>
      <p className={`text text_type_main-default text_color_inactive`}>
        {data.text}
      </p>
      <p className={`text text_type_main-default text_color_inactive`}>
        {data.value}
      </p>
    </li>
  );
}

IngredientDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IngredientDetails;
