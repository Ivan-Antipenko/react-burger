import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addIngredients } from "../../../services/actions/constructor";
import constructorItemsStyles from "../ConstructorItems/ConstructorItems.module.css";
import { ConstructorList } from "../ConstructorList/ConstructorList";

export function ConstructorItems() {
  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch(addIngredients(item, dataBun));
    },
  });
  const dataBun = useSelector((store) => store.burgerConstructor.bun);
  const ingredients = useSelector((store) => store.burgerConstructor.items);

  return (
    <div
      className={`${constructorItemsStyles.constructor_wrapper} mt-25 pr-4`}
      ref={dropTarget}
    >
      {!dataBun ? (
        <div className={constructorItemsStyles.constructor_list_empty}>
          <p className={constructorItemsStyles.constructor_list_empty_title}>
            Перетащите нужную булочку сюда
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4 mr-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${dataBun.name}(верх)`}
              price={dataBun.price}
              thumbnail={dataBun.image}
            />
          </div>

          {ingredients.length === 0 ? (
            <div
              className={constructorItemsStyles.constructor_list_empty_small}
            >
              <p
                className={constructorItemsStyles.constructor_list_empty_title}
              >
                А теперь любой ингредиент!
              </p>
            </div>
          ) : (
            <ConstructorList />
          )}

          <div className="mb-4 mr-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${dataBun.name}(низ)`}
              price={dataBun.price}
              thumbnail={dataBun.image}
            />
          </div>
        </>
      )}
    </div>
  );
}
