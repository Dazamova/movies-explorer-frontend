const ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export { ERROR_MESSAGE };

export const apiConfig = {
  baseUrl: 'https://api.movies-scout.nomoredomains.monster',
  // baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const moviesApiConfig = {
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
}

// export const apiConfig = {
//   baseUrl: 'https://api.mesto-travel.nomoredomains.monster',
//   headers: {
//     // 'Authorization': '08ca9b9b-5109-4975-909a-0b8f1b0ed24a',
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   }
// };
