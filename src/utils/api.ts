import { getCookie } from "./cookie";

export function checkRequest(res: Response) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

export function getData() {
  const url = "https://norma.nomoreparties.space/api/ingredients";
  return fetch(url).then(checkRequest);
}

export function getOrderNumber(ingredientsId: number) {
  const url = "https://norma.nomoreparties.space/api/orders";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      ingredients: ingredientsId,
    }),
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
  }).then(checkRequest);
}

export function registerRequest(name: string, email: string, pass: string) {
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

export function loginRequest(email: string, pass: string) {
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

export function refreshToken(token: string) {
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

export function logoutRequest() {
  const token = localStorage.getItem("refreshToken");
  const url = "https://norma.nomoreparties.space/api/auth/logout";
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

export function recoveryPass(email: string) {
  const url = "https://norma.nomoreparties.space/api/password-reset";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkRequest);
}

export function resetPassRequest(pass: string | number, code: string | number) {
  const url = "https://norma.nomoreparties.space/api/password-reset/reset";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      password: pass,
      token: code,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkRequest);
}

export function getUser(token: string) {
  const url = "https://norma.nomoreparties.space/api/auth/user";
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  }).then(checkRequest);
}

export function updateUserInfo(name: string, email: string, pass: string | number, token: string) {
  const url = "https://norma.nomoreparties.space/api/auth/user";
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: pass,
    }),
  }).then(checkRequest);
}

export function getFeeds(name: string, email: string, pass: string | number, token: string) {
  const url = "https://norma.nomoreparties.space/api/auth/user";
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: pass,
    }),
  }).then(checkRequest);
}
