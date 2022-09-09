import constructorStyles from "./BurgerConstructor.module.css";
import { ButtonPriceWrapper } from "./ButtonPriceWrapper/ButtonPriceWrapper";
import { ConstructorItems } from "./ConstructorItems/ConstructorItems";

function BurgerConstructor() {
  return (
    <section className={constructorStyles.constructor_section}>
      <ConstructorItems />
      <ButtonPriceWrapper />
    </section>
  );
}

export default BurgerConstructor;
