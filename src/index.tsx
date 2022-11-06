import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/components/App/App";
import reportWebVitals from "./reportWebVitals";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { rootReducer } from "./services/root-reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { socketMiddleware } from "./services/middleware/socketMiddleware";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_FAILED,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_SEND_ORDERS,
} from "./services/actions/wsActions";
import {
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_FAILED,
  WS_USER_CONNECTION_START,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_GET_ORDERS,
  WS_USER_SEND_ORDERS,
} from "./services/actions/wsUserActions";

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const wsUrl: string = "wss://norma.nomoreparties.space/orders/all";
const wsUrlUser: string = "wss://norma.nomoreparties.space/orders";

const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_ORDERS,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_FAILED,
  onMessage: WS_GET_ORDERS,
};

const wsUserActions = {
  wsInit: WS_USER_CONNECTION_START,
  wsSendMessage: WS_USER_SEND_ORDERS,
  onOpen: WS_USER_CONNECTION_SUCCESS,
  onClose: WS_USER_CONNECTION_CLOSED,
  onError: WS_USER_CONNECTION_FAILED,
  onMessage: WS_USER_GET_ORDERS,
};

const enhancer = composeEnhancers(
  applyMiddleware(thunk,
  socketMiddleware(wsUrl, wsActions, false),
  socketMiddleware(wsUrlUser, wsUserActions, true))
);
export const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

reportWebVitals();
