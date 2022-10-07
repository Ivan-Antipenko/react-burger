import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, setLoginValue } from "../../services/actions/register";

import loginStyles from "./Login.module.css";

export function Login() {
  const dispatch = useDispatch();

  const email = useSelector((store) => store.register.form.email);
  const pass = useSelector((store) => store.register.form.pass);

  function inputUser(evt) {
    dispatch(setLoginValue(evt.target.name, evt.target.value));
  }

  function submitLogin(evt) {
    evt.preventDefault();
    dispatch(login(email, pass));
  }

  return (
    <section className={loginStyles.content_box}>
      <form className={loginStyles.wrapper} onSubmit={submitLogin}>
        <p className="text text_type_main-medium">Вход</p>
        <div className="mt-6">
          <Input
            name="email"
            placeholder="E-mail"
            onChange={inputUser}
            value={email}
          />
        </div>
        <div className="mt-6">
          <PasswordInput
            name="pass"
            placeholder="Пароль"
            onChange={inputUser}
            value={pass}
          />
        </div>
        <div className="mt-6">
          <Button>Войти</Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Вы - новый пользователь?
          <Link className="text text_type_main-default" to="/register">
            {" "}
            Зарегистрироваться
          </Link>
        </p>
        <p className="text text_type_main-default text_color_inactive mt-4">
          Забыли пароль?{" "}
          <Link className="text text_type_main-default" to="/forgot-password">
            Восстановить пароль
          </Link>
        </p>
      </form>
    </section>
  );
}
