import { IItem, useDispatch } from "../../../services/types";
import { openModal } from "../../../services/actions/ingredientsDetails";
import { IngredientItem } from "../../IngredientItem/IngredientItem";
import ingredientsListStyles from "../IngredientList/IngredientsList.module.css";

interface IIngrListProps {
  data: IItem[]
}

export function IngredientsList({ data }: IIngrListProps) {
  const dispatch = useDispatch();

  function openDetailsModal(el: IItem) {
    dispatch(openModal(el));
  }

  return (
    <ul className={`${ingredientsListStyles.menu_list} mt-6 ml-1 mr-1`}>
      {data.map((el) => (
        <IngredientItem
          el={el}
          onClick={() => openDetailsModal(el)}
          key={el._id}
        />
      ))}
    </ul>
  );
}
