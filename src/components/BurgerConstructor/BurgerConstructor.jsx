import constructorStyles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor({ data, openModal }) {
  return (
    <section className={constructorStyles.constructor_section}>
      <ConstructorItems data={data} />
      <ButtonPriceWrapper openModal={openModal} />
    </section>
  );
}

function ConstructorItems({ data }) {
  return (
    <div className={`${constructorStyles.constructor_wrapper} mt-25 pr-4`}>
      <div className="mb-4 mr-4">
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
      </div>

      <ConstructorList data={data} />

      <div className="mt-4 mr-4">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
      </div>
    </div>
  );
}

function ConstructorList({ data }) {
  return (
    <ul className={constructorStyles.constructor_list}>
      {data.map((el) => {
        if (el.type === "sauce" || el.type === "main") {
          return (
            <li
              className={`${constructorStyles.constructor_list_item} mb-4 mr-2`}
              key={el._id}
            >
              <DragIcon />
              <ConstructorElement
                text={el.name}
                price={el.price}
                thumbnail={el.image}
                key={el._id}
              />
            </li>
          );
        }
      })}
    </ul>
  );
}

function ButtonPriceWrapper({ openModal }) {
  return (
    <div className={`${constructorStyles.constructor_button_wrapper} mt-10`}>
      <div className={`${constructorStyles.constructor_price_box} mr-10`}>
        <p className="text text_type_digits-medium mr-2">610</p>
        <CurrencyIcon type="primary" size="large" />
      </div>
      <Button type="primary" size="large" onClick={openModal}>
        Оформить заказ
      </Button>
    </div>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default BurgerConstructor;
