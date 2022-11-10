import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { updatePass } from "../../services/actions/register";

import registerStyles from "./Forgot.module.css";

export function Forgot() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  function onChange(evt) {
    setEmail(evt.target.value);
  }

  function submitForgot(evt) {
    evt.preventDefault();
    dispatch(updatePass(email));
  }

  const isRecovery = useSelector((store) => store.register.isRecoveryProcess);
  const isLogin = useSelector((store) => store.register.isLogin);

  if (isRecovery) {
    return <Redirect to="/reset-password" />;
  }
  if (isLogin) {
    return <Redirect to="/" />;
  }

  return (
    <section className={registerStyles.content_box}>
      <form className={registerStyles.wrapper} onSubmit={submitForgot}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <div className={`${registerStyles.input_wrapper} mt-6`}>
          <Input
            placeholder="Укажите e-mail"
            name="email"
            onChange={onChange}
            value={email}
            type="email"
          />
        </div>
        <div className="mt-6">
          <Button disabled={!email}>Восстановить</Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Вспомнили пароль?{" "}
          <Link className="text text_type_main-default" to="/login">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}
