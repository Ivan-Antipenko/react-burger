import React from "react";
import PropTypes from "prop-types";
import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerStyles from "./BurgerIngredients.module.css";
import { useSelector } from "react-redux";

function BurgerIngredients({ openModal }) {
  const [current, setCurrent] = React.useState("bun");

  const data = useSelector((store) => store.ingredients.burgerIngredients);

  const bunMenu = data.filter((el) => el.type === "bun");
  const sauceMenu = data.filter((el) => el.type === "sauce");
  const mainMenu = data.filter((el) => el.type === "main");

  const bunRef = React.useRef();
  const sauceRef = React.useRef();
  const mainRef = React.useRef();

  function scrollTabClick(e, tab) {
    setCurrent(e);
    tab.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className={burgerStyles.ingredient_section}>
      <h1 className="mt-10 text text_type_main-large">Соберите бургер</h1>

      <div className={`${burgerStyles.tab_wrapper} mt-5`}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={(e) => scrollTabClick(e, bunRef)}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={(e) => scrollTabClick(e, sauceRef)}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={(e) => scrollTabClick(e, mainRef)}
        >
          Начинки
        </Tab>
      </div>

      <div className={burgerStyles.ingredients_box}>
        <h2 className="text text_type_main-medium mt-10" ref={bunRef}>
          Булки
        </h2>
        <IngredientsList data={bunMenu} type="bun" openModal={openModal} />
        <h2 className="text text_type_main-medium mt-10" ref={sauceRef}>
          Соусы
        </h2>
        <IngredientsList data={sauceMenu} type="sauce" openModal={openModal} />
        <h2 className="text text_type_main-medium mt-10" ref={mainRef}>
          Начинки
        </h2>
        <IngredientsList data={mainMenu} type="main" openModal={openModal} />
      </div>
    </section>
  );
}

function IngredientsList({ data, openModal }) {
  return (
    <ul className={`${burgerStyles.menu_list} mt-6 ml-1 mr-1`}>
      {data.map((el) => (
        <li key={el._id}>
          <div className={burgerStyles.menu_item} onClick={openModal}>
            <Counter />
            <img className="ml-4 mr-4" src={el.image} />
            <div className={`${burgerStyles.item_price_box} mt-1`}>
              <p className="text text_type_digits-default mr-2">{el.price}</p>
              <CurrencyIcon />
            </div>
            <h3 className="text text_type_main-default mt-1`">{el.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}

BurgerIngredients.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default BurgerIngredients;
