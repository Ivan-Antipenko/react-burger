import {
  Input,
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { registration, setFormValue } from "../../services/actions/register";
import registerStyles from "./Register.module.css";

export function Register() {
  const dispatch = useDispatch();
  const isLogin = useSelector((store) => store.register.isLogin);
  const registerCmplt = useSelector(
    (store) => store.register.registrationComplete
  );

  const name = useSelector((store) => store.register.form.name);
  const email = useSelector((store) => store.register.form.email);
  const pass = useSelector((store) => store.register.form.pass);

  function inputUser(evt) {
    dispatch(setFormValue(evt.target.name, evt.target.value));
  }

  function submitForm(evt) {
    evt.preventDefault();
    dispatch(registration(name, email, pass));
  }

  if (isLogin) {
    return <Redirect to="/" />;
  }

  if (registerCmplt) {
    return <Redirect to="/login" />;
  }

  return (
    <section className={registerStyles.content_box}>
      <form className={registerStyles.wrapper} onSubmit={submitForm}>
        <p className="text text_type_main-medium">Регистрация</p>
        <div className={`${registerStyles.input_wrapper} mt-6`}>
          <Input
            placeholder="Имя"
            name={"name"}
            value={name}
            onChange={inputUser}
            type="text"
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="E-mail"
            name={"email"}
            value={email}
            onChange={inputUser}
            type="email"
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="Пароль"
            name={"pass"}
            value={pass}
            onChange={inputUser}
            type="password"
          />
        </div>
        <div className="mt-6">
          <Button disabled={!name || !email || !pass}>
            Зарегистрироваться
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Уже зарегистрированы?{" "}
          <Link className="text text_type_main-default" to="/login">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}
