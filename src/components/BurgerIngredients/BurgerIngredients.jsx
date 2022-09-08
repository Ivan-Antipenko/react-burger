import React, { useEffect, useState } from "react";
import { IngredientItem } from "../IngredientItem/IngredientItem";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerStyles from "./BurgerIngredients.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../services/actions/ingredientsDetails";
import { useInView } from "react-intersection-observer";

function BurgerIngredients() {
  const [current, setCurrent] = useState("bun");

  const [bunRef, bunView] = useInView({
    threshold: 1,
  });
  const [sauceRef, sauceView] = useInView({
    threshold: 1,
  });
  const [mainRef, mainView] = useInView({
    threshold: 1,
  });

  const scrollTabClick = (e) => {
    const section = document.getElementById(e);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleIngredientScroll = () => {
    switch (true) {
      case bunView:
        setCurrent("bun");
        break;
      case sauceView:
        setCurrent("sauce");
        break;
      case mainView:
        setCurrent("main");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleIngredientScroll();
  }, [bunView, sauceView, mainView]);

  const data = useSelector((store) => store.ingredients.burgerIngredients);

  const bunMenu = data.filter((el) => el.type === "bun");
  const sauceMenu = data.filter((el) => el.type === "sauce");
  const mainMenu = data.filter((el) => el.type === "main");

  return (
    <section className={burgerStyles.ingredient_section}>
      <h1 className="mt-10 text text_type_main-large">Соберите бургер</h1>

      <div className={`${burgerStyles.tab_wrapper} mt-5`}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={(e) => scrollTabClick(e)}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={(e) => scrollTabClick(e)}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={(e) => scrollTabClick(e)}
        >
          Начинки
        </Tab>
      </div>

      <div className={burgerStyles.ingredients_box}>
        <h2 className="text text_type_main-medium mt-10" ref={bunRef}>
          Булки
        </h2>
        <IngredientsList data={bunMenu} type="bun" />
        <h2 className="text text_type_main-medium mt-10" ref={sauceRef}>
          Соусы
        </h2>
        <IngredientsList data={sauceMenu} type="sauce" />
        <h2 className="text text_type_main-medium mt-10" ref={mainRef}>
          Начинки
        </h2>
        <IngredientsList data={mainMenu} type="main" />
      </div>
    </section>
  );
}

function IngredientsList({ data }) {
  const dispatch = useDispatch();

  function openDetailsModal(el) {
    dispatch(openModal(el));
  }

  return (
    <ul className={`${burgerStyles.menu_list} mt-6 ml-1 mr-1`}>
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

export default BurgerIngredients;
