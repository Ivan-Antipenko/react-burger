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
import { Login } from "../../pages/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Register } from "../../pages/Register/Register";
import { Profile } from "../../pages/Profile/Profile";
import { Forgot } from "../../pages/Forgot/Forgot";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { getUserInfo, updateToken } from "../../services/actions/register";
import { getCookie } from "../../utils/cookie";
import { Reset } from "../../pages/Reset/Reset";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("refreshToken");
  const cookie = getCookie("accessToken");

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  useEffect(() => {
    if (!cookie && token) {
      dispatch(updateToken());
    }
    if (cookie && token) {
      dispatch(getUserInfo());
    }
  }, [cookie, token, dispatch]);

  const isLoading = useSelector((store) => store.ingredients.isLoading);
  const isError = useSelector((store) => store.ingredients.isError);
  const ingredientDetails = useSelector(
    (store) => store.ingredientDetails.isModalOpen
  );
  const orderDetails = useSelector((store) => store.orderDetails.isModalOpen);

  return (
    <Router>
      <div className="page">
        <AppHeader />
        <Switch>
          <Route path="/" exact={true}>
            {isLoading && (
              <h1 className={appStyles.message}>{`Загрузка...`}</h1>
            )}
            {isError && <h1>{`Ой, кажется что-то пошло не так :c`}</h1>}
            {!isLoading && !isError && (
              <main className={appStyles.wrapper}>
                <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </DndProvider>
              </main>
            )}
          </Route>
          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/forgot-password">
            <Forgot />
          </Route>

          <Route path="/reset-password">
            <Reset />
          </Route>
        </Switch>

        {orderDetails && (
          <Modal>
            <OrderDetails />
          </Modal>
        )}
        {ingredientDetails && (
          <Route path="/ingredients/:id">
            <Modal>
              <IngredientDetails />
            </Modal>
          </Route>
        )}
      </div>
    </Router>
  );
}

export default App;
