import {
  Button,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login, setLoginValue } from "../../services/actions/register";
import { getCookie } from "../../utils/cookie";

import loginStyles from "./Login.module.css";

export function Login() {
  const dispatch = useDispatch();

  const isLogin = useSelector((store) => store.register.isLogin);
  const email = useSelector((store) => store.register.form.email);
  const pass = useSelector((store) => store.register.form.pass);

  function inputUser(evt) {
    dispatch(setLoginValue(evt.target.name, evt.target.value));
  }

  function submitLogin(evt) {
    evt.preventDefault();
    dispatch(login(email, pass));
  }

  if (isLogin) {
    return <Redirect to="/" />;
  }

  return (
    <section className={loginStyles.content_box}>
      <form className={loginStyles.wrapper} onSubmit={submitLogin}>
        <p className="text text_type_main-medium">Вход</p>
        <div className="mt-6">
          <EmailInput
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
          <Button disabled={!pass || !email}>Войти</Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Вы - новый пользователь?
          <Link
            className={`${loginStyles.link}"text text_type_main-default"`}
            to="/register"
          >
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
