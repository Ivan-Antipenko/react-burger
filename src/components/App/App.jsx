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
import { Route, Switch, useLocation } from "react-router-dom";
import { Register } from "../../pages/Register/Register";
import { Profile } from "../../pages/Profile/Profile";
import { Forgot } from "../../pages/Forgot/Forgot";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { getUserInfo, updateToken } from "../../services/actions/register";
import { Reset } from "../../pages/Reset/Reset";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const background = location.state?.background;

  const isLoading = useSelector((store) => store.ingredients.isLoading);
  const isLogin = useSelector((store) => store.ingredients.isLogin);
  const isError = useSelector((store) => store.ingredients.isError);
  const orderDetails = useSelector((store) => store.orderDetails.isModalOpen);

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getIngredients());
    if (!isLogin) {
      dispatch(updateToken());
    }
  }, []);

  return (
    <div className="page">
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact>
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
        </Route>
        <ProtectedRoute path="/profile" exact>
          <Profile />
        </ProtectedRoute>

        <Route path="/register" exact>
          <Register />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/forgot-password" exact>
          <Forgot />
        </Route>

        <Route path="/reset-password" exact>
          <Reset />
        </Route>
      </Switch>

      <Route path="/ingredients/:id">
        <Modal>
          <IngredientDetails />
        </Modal>
      </Route>

      {orderDetails && (
        <Modal>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
