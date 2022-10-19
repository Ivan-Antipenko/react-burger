import { getCookie } from "../../utils/cookie";


export function socketMiddleware (wsUrl) {
    return store => {
        let socket = null;

    return next => action => {
      const { dispatch} = store;
      const { type, payload } = action;
 
      const token = getCookie('accessToken')

      if (type === "WS_CONNECTED_START") {
            // объект класса WebSocket
        socket = new WebSocket(wsUrl);
      }
      if (socket) {
                // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: "WS_CONNECTED_SUCCESS", payload: event });
        };
                // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: "WS_CONNECTED_ERROR", payload: event });
        };
                // функция, которая вызывается при получении события от сервера
        socket.onmessage = event => {
          let { data } = event;
          data = JSON.parse(data);
          dispatch({ type: "WS_GET_ORDERS", payload: data });
        };
                // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: "WS_CONNECTED_CLOSED", payload: event });
        };

        if (type === "WS_SEND_MESSAGE") {
          const message = payload;
                    // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }
      next(action);
    };
    };
};