import { Middleware, MiddlewareAPI } from "redux";
import { getCookie } from "../../utils/cookie";

export interface IWsActions {
  wsInit: string;
  wsSendMessage: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
}

export function socketMiddleware(url: string, actions: IWsActions, isLogin: boolean = false): Middleware {
  return (store: MiddlewareAPI) => {
    let socket: WebSocket | null = null
    
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } =
      actions;

      const token = getCookie("accessToken");
      if (type === wsInit) {
        socket = !isLogin
          ? new WebSocket(url)
          : new WebSocket(`${url}?token=${token}`);
      } else if (type === onClose && socket) {
        socket.close();
      }

      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };
        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };
        // функция, которая вызывается при получении события от сервера
        socket.onmessage = (event) => {
          const { data } = event;
          const res = JSON.parse(data);
          dispatch({ type: onMessage, payload: res });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const message = payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }
      next(action);
    };
  };
}