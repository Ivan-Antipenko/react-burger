import burgerStyles from "../BurgerIngredients/BurgerIngredients.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export function IngredientItem({ el, openModal }) {
  let counter = 0;
  const constructor = useSelector((store) => store.burgerConstructor.items);
  const constructorBuns = useSelector((store) => store.burgerConstructor.bun);

  constructor.map((item) => {
    if (item._id === el._id) {
      counter++;
    }
  });

  if (constructorBuns) {
    if (constructorBuns._id === el._id) {
      counter++;
    }
  }
  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredient",
    item: el,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    !isDrag && (
      <Link
        to={{
          pathname: `/ingredients/${el._id}`,
        }}
      >
        <li ref={dragRef} onClick={openModal}>
          <div className={burgerStyles.menu_item}>
            {counter > 0 && <Counter count={counter} />}
            <img className="ml-4 mr-4" src={el.image} />
            <div className={`${burgerStyles.item_price_box} mt-1`}>
              <p className="text text_type_digits-default mr-2">{el.price}</p>
              <CurrencyIcon />
            </div>
            <h3 className="text text_type_main-default mt-1`">{el.name}</h3>
          </div>
        </li>
      </Link>
    )
  );
}
