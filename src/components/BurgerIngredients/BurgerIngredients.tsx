import { useEffect, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerStyles from "./BurgerIngredients.module.css";
import { useSelector } from "../../services/types";
import { useInView } from "react-intersection-observer";
import { IngredientsList } from "./IngredientList/IngredientsList";

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

  const scrollTabClick = (e: string) => {
    const section = document.getElementById(e)!;
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
        <h2
          className="text text_type_main-medium mt-10"
          ref={bunRef}
          id={"bun"}
        >
          Булки
        </h2>
        <IngredientsList data={bunMenu} />
        <h2
          className="text text_type_main-medium mt-10"
          ref={sauceRef}
          id={"sauce"}
        >
          Соусы
        </h2>
        <IngredientsList data={sauceMenu} />
        <h2
          className="text text_type_main-medium mt-10"
          ref={mainRef}
          id={"main"}
        >
          Начинки
        </h2>
        <IngredientsList data={mainMenu} />
      </div>
    </section>
  );
}

export default BurgerIngredients;
