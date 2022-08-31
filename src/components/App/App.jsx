import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../AppHeader/AppHeader";
import appStyles from "../App/App.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import { getIngredients } from "../../services/actions/ingredients";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const isLoading = useSelector((store) => store.ingredients.isLoading);
  const isError = useSelector((store) => store.ingredients.isError);

  console.log(isLoading);

  const [isIngridientModalOpen, setIngridientModal] = useState(false);
  const [isOrderModalOpen, setOrderModal] = useState(false);

  function openIngredientModal() {
    setIngridientModal(true);
  }

  function openOrderModal() {
    setOrderModal(true);
  }

  function closeModal() {
    setIngridientModal(false);
    setOrderModal(false);
  }

  return (
    <div className="page">
      <AppHeader />

      {isLoading && <h1 className={appStyles.message}>{`Загрузка...`}</h1>}
      {isError && <h1>{`Ой, кажется что-то пошло не так :c`}</h1>}

      {!isLoading && !isError && (
        <main className={appStyles.wrapper}>
          <BurgerIngredients openModal={openIngredientModal} />
          <BurgerConstructor openModal={openOrderModal} />
        </main>
      )}

      {isOrderModalOpen && (
        <Modal closeModal={closeModal} isOpen={isOrderModalOpen}>
          <OrderDetails />
        </Modal>
      )}
      {isIngridientModalOpen && (
        <Modal closeModal={closeModal} isOpen={isIngridientModalOpen}>
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
