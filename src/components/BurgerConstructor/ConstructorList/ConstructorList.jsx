import { useSelector } from "react-redux";
import { ConstructorItem } from "../ConstructorItem/ConstructorItem";
import constructorListStyles from "./ConstructorList.module.css";

export function ConstructorList() {
  const ingredients = useSelector((store) => store.burgerConstructor.items);

  return (
    <ul className={constructorListStyles.constructor_list}>
      {ingredients.map((el, index) => (
        <ConstructorItem el={el} index={index} key={el.uniCode} />
      ))}
    </ul>
  );
}
