import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState} from "react";
import { Link, Redirect } from "react-router-dom";
import { resetPass } from "../../services/actions/register";
import { useSelector, useDispatch } from "../../services/types";
import resetStyles from "./Reset.module.css";

export function Reset() {
  const dispatch = useDispatch();

  const [pass, setPass] = useState("");
  function onChangePass(evt: React.ChangeEvent<HTMLInputElement>) {
    console.log(evt)
    setPass(evt.target.value);
  }

  const [code, setCode] = useState("");
  function onChangeCode(evt: React.ChangeEvent<HTMLInputElement>) {
    setCode(evt.target.value);
  }

  function submitReset(evt: React.FormEvent) {
    evt.preventDefault();
    dispatch(resetPass(pass, code));
  }

  const isLogin = useSelector((store) => store.register.isLogin);
  const recoveryProcess = useSelector(
    (store) => store.register.isRecoveryProcess
  );
  const recoveryProcessCmplt = useSelector(
    (store) => store.register.isRecoveryProcessComplete
  );

  if (!recoveryProcess && !recoveryProcessCmplt) {
    return <Redirect to="/forgot-password" />;
  }

  if (isLogin) {
    return <Redirect to="/" />;
  }

  if (recoveryProcessCmplt && !recoveryProcess) {
    return <Redirect to="/login" />;
  }

  return (
    <section className={resetStyles.content_box}>
      <form className={resetStyles.wrapper} onSubmit={submitReset}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <div className={`${resetStyles.input_wrapper} mt-6`}>
          <Input
            placeholder="Введите новый пароль"
            name="pass"
            onChange={onChangePass}
            value={pass}
            type="password"
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="Введите код из письма"
            name="code"
            onChange={onChangeCode}
            value={code}
            type="text"
          />
        </div>
        <div className="mt-6">
          <Button htmlType="submit" disabled={!pass || !code}>Сохранить</Button>
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
