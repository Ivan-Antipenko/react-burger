import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { resetPass } from "../../services/actions/register";

import resetStyles from "./Reset.module.css";

export function Reset() {
  const dispatch = useDispatch();

  const [pass, setPass] = useState("");
  function onChangePass(evt) {
    setPass(evt.target.value);
  }

  const [code, setCode] = useState("");
  function onChangeCode(evt) {
    setCode(evt.target.value);
  }

  function submitReset(evt) {
    evt.preventDefault();
    dispatch(resetPass(pass, code));
  }

  const isLogin = useSelector((store) => store.register.isLogin);

  if (isLogin) {
    return <Redirect to="/" />;
  }

  return (
    <section className={resetStyles.content_box}>
      <form className={resetStyles.wrapper} onSubmit={submitReset}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <div className={`${resetStyles.input_wrapper} mt-6`}>
          <PasswordInput
            placeholder="Введите новый пароль"
            name="pass"
            onChange={onChangePass}
            value={pass}
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="Введите код из письма"
            name="code"
            onChange={onChangeCode}
            value={code}
          />
        </div>
        <div className="mt-6">
          <Button>Сохранить</Button>
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
