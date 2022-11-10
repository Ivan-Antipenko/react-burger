import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../AppHeader/AppHeader";
import appStyles from "../App/App.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import { getIngredients } from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const isLoading = useSelector((store) => store.ingredients.isLoading);
  const isError = useSelector((store) => store.ingredients.isError);
  const ingredientDetails = useSelector(
    (store) => store.ingredientDetails.isModalOpen
  );
  const orderDetails = useSelector((store) => store.orderDetails.isModalOpen);

  return (
    <div className="page">
      <AppHeader />

      {isLoading && <h1 className={appStyles.message}>{`Загрузка...`}</h1>}
      {isError && <h1>{`Ой, кажется что-то пошло не так :c`}</h1>}

      {!isLoading && !isError && (
        <main className={appStyles.wrapper}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}

      {orderDetails && (
        <Modal>
          <OrderDetails />
        </Modal>
      )}
      {ingredientDetails && (
        <Modal>
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
