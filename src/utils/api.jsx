export const checkRequest = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

export function getData() {
  const url = "https://norma.nomoreparties.space/api/ingredients";
  return fetch(url).then(checkRequest);
}

export function getOrderNumber(ingredientsId) {
  const url = "https://norma.nomoreparties.space/api/orders";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      ingredients: ingredientsId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkRequest);
}

export function registerRequest(name, email, pass) {
  const url = "https://norma.nomoreparties.space/api/auth/register";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: pass,
      name: name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkRequest);
}

export function loginRequest(email, pass) {
  const url = "https://norma.nomoreparties.space/api/auth/login";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: pass,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkRequest);
}

export function refreshToken(token) {
  const url = "https://norma.nomoreparties.space/api/auth/token";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      token: token,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkRequest);
}
