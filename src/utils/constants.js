const ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const SHORTMOVIE_DURATION = 40;
const DESKTOP_SCREENWIDTH = 1279;
const TABLET_SCREENWIDTH = 768;
const DESKTOP_NUMBER_OF_CARDS = 12;
const TABLET_NUMBER_OF_CARDS = 8;
const MOBILE_NUMBER_OF_CARDS = 5;
const DESKTOP_NUMBER_OF_ADDED_CARDS = 3;
const TABLET_NUMBER_OF_ADDED_CARDS = 2;
const MOBILE_NUMBER_OF_ADDED_CARDS = 1;
const UPDATE_PROFILE_ERROR = "Ошибка при обновлении профиля! Попробуйте позже.";
const SIGN_UP_ERROR = "Ошибка! Регистрация не удалась :(";
const SIGN_IN_ERROR = "Ошибка! Проблема со входом :(";
const UPDATE_PROFILE_MESSAGE = "Данные успешно сохранены!";
const INPUT_SETTINGS = {
  name: {
    minLength: 2,
    maxLength: 20,
  },
  email: {
    minLength: 6,
    maxLength: 40,
  },
  password: {
    minLength: 6,
    maxLength: 10,
  }
};

export {
  ERROR_MESSAGE, DESKTOP_SCREENWIDTH, TABLET_SCREENWIDTH, UPDATE_PROFILE_ERROR, SIGN_UP_ERROR, SIGN_IN_ERROR,
  INPUT_SETTINGS, UPDATE_PROFILE_MESSAGE, SHORTMOVIE_DURATION, DESKTOP_NUMBER_OF_CARDS, TABLET_NUMBER_OF_CARDS,
  MOBILE_NUMBER_OF_CARDS, DESKTOP_NUMBER_OF_ADDED_CARDS,TABLET_NUMBER_OF_ADDED_CARDS, MOBILE_NUMBER_OF_ADDED_CARDS
}

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