import { useDispatch } from "react-redux";
import { openModal } from "../../../services/actions/ingredientsDetails";
import { IngredientItem } from "../../IngredientItem/IngredientItem";
import ingredientsListStyles from "../IngredientList/IngredientsList.module.css";

export function IngredientsList({ data }) {
  const dispatch = useDispatch();

  function openDetailsModal(el) {
    dispatch(openModal(el));
  }

  return (
    <ul className={`${ingredientsListStyles.menu_list} mt-6 ml-1 mr-1`}>
      {data.map((el) => (
        <IngredientItem
          el={el}
          openModal={openDetailsModal}
          data={data}
          key={el._id}
        />
      ))}
    </ul>
  );
}
