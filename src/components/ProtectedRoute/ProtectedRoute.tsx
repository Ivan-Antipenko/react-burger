import { Redirect, Route } from "react-router-dom";
import { IComponentProps } from "../../services/types";
import { getCookie } from "../../utils/cookie";


export const ProtectedRoute = ({ children, ...rest }: IComponentProps) => {
  const token = getCookie("accessToken");
  return (
    <Route
      {...rest}
      render={() => (token ? children : <Redirect to="/login" />)}
    />
  );
}
