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
