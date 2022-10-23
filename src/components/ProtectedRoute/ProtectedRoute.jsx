import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

export function ProtectedRoute({ children, ...rest }) {
  const token = getCookie("accessToken");
  const isLogin = useSelector((store) => store.register.isLogin);
  return (
    <Route
      {...rest}
      render={() => (token ? children : <Redirect to="/login" />)}
    />
  );
}
