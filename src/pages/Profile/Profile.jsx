import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { OrderInfo } from "../../components/OrderInfo/OrderInfo";
import { OrdersStory } from "../../components/OrdersStory/OrdersStory";
import { logout, updateUser } from "../../services/actions/register";

import profileStyles from "./Profile.module.css";

export function Profile() {
  const location = useLocation();
  const dispatch = useDispatch();
  const password = localStorage.getItem("password");
  const isLogin = useSelector((store) => store.register.isLogin);
  const { email, name } = useSelector((store) => store.register.user);
  const [form, setForm] = useState({
    name: "",
    email: "",
    pass: "",
  });

  let [buttonSwitch, setSwitch] = useState(false);
  const orders = useSelector((store) => store.wsUserReducer.orders).reverse();

  function logoutUser() {
    dispatch(logout());
  }

  function submitUserInfo(evt) {
    evt.preventDefault();
    dispatch(updateUser(form.name, form.email, form.pass));
    setSwitch((buttonSwitch = false));
  }

  function inputUser(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
    setSwitch((buttonSwitch = true));
  }

  function reset(evt) {
    evt.preventDefault();
    setForm({
      email: email,
      name: name,
      pass: password,
    });
    setSwitch((buttonSwitch = false));
  }

  useEffect(() => {
    setForm({
      email: email,
      name: name,
      pass: password,
    });
  }, [email, name, password]);

  return (
    <section className={profileStyles.content_box}>
      <div className={profileStyles.menu_wrapper}>
        <ul className={profileStyles.menu_list}>
          <li>
            <NavLink
              to="/profile"
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              activeClassName={profileStyles.active_button}
            >
              Профиль
            </NavLink>
          </li>
          <li className="mt-10">
            <NavLink
              to="/profile/orders"
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              activeClassName={profileStyles.active_button}
            >
              История заказов
            </NavLink>
          </li>
          <li className="mt-10">
            <NavLink
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              onClick={logoutUser}
              to="/login"
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>

      <Switch>
        <Route path="/profile" exact>
          <div>
            <form
              className={`${profileStyles.inputs_wrapper} ml-15`}
              onSubmit={submitUserInfo}
            >
              <div className={profileStyles.input}>
                <Input
                  size="default"
                  placeholder="Имя"
                  icon={"EditIcon"}
                  value={form.name}
                  onChange={inputUser}
                  name="name"
                  type="text"
                />
              </div>
              <div className="mt-6">
                <Input
                  placeholder="Логин"
                  icon={"EditIcon"}
                  value={form.email}
                  onChange={inputUser}
                  name="email"
                  type="email"
                />
              </div>
              <div className="mt-6">
                <Input
                  placeholder="Пароль"
                  icon={"EditIcon"}
                  value={form.pass}
                  onChange={inputUser}
                  name="pass"
                  type="password"
                />
              </div>
              <div className={`${profileStyles.buttons_wrapper} mt-6`}>
                <Button disabled={!buttonSwitch} onClick={reset}>
                  Отмена
                </Button>
                <Button disabled={!buttonSwitch}>Сохранить</Button>
              </div>
            </form>
          </div>
        </Route>
        <Route path="/profile/orders" exact>
          <div className={`${profileStyles.orders_wrapper} ml-15 pr-2`}>
            <ul className={profileStyles.orders_list}>
              {orders.map((el, index) => (
                <li key={index}>
                  <Link
                    to={{
                      pathname: `/profile/orders/${el._id}`,
                      state: { background: location },
                    }}
                  >
                    <OrdersStory order={el} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Route>
      </Switch>
    </section>
  );
}

{
}
