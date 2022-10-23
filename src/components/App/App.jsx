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
import { getUserInfo } from "../../services/actions/register";
import { Reset } from "../../pages/Reset/Reset";
import { Feed } from "../Feed/Feed";
import { wsConnectedStart } from "../../services/actions/wsActions";
import { FeedDetails } from "../FeedDetails/FeedDetails";
import {
  wsUserConnectedStart,
  wsUserConnectedClosed,
} from "../../services/actions/wsUserActions";
import { OrderInfo } from "../OrderInfo/OrderInfo";
function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state?.background;

  const isLoading = useSelector((store) => store.ingredients.isLoading);
  const isLogin = useSelector((store) => store.register.isLogin);
  const isError = useSelector((store) => store.ingredients.isError);
  const orderDetails = useSelector((store) => store.orderDetails.isModalOpen);
  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUserInfo());
    dispatch(wsConnectedStart());
  }, []);

  useEffect(() => {
    if (isLogin) {
      dispatch(wsUserConnectedStart());
    } else {
      dispatch(wsUserConnectedClosed());
    }
  }, [isLogin]);

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
        <ProtectedRoute path="/profile/orders/:id">
          <OrderInfo />
        </ProtectedRoute>

        <ProtectedRoute path="/profile">
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

        <Route path="/feed" exact>
          <Feed />
        </Route>

        <Route path="/ingredients/:id" exact>
          <IngredientDetails />
        </Route>

        <Route path="/feed/:id" exact>
          <FeedDetails />
        </Route>
      </Switch>

      {background && (
        <Route path="/ingredients/:id" exact>
          <Modal>
            <IngredientDetails />
          </Modal>
        </Route>
      )}

      {background && (
        <ProtectedRoute path="/profile/orders/:id">
          <Modal>
            <OrderInfo />
          </Modal>
        </ProtectedRoute>
      )}

      {background && (
        <Route path="/feed/:id" exact>
          <Modal>
            <FeedDetails />
          </Modal>
        </Route>
      )}

      {orderDetails && (
        <Modal>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
