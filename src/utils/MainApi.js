import { apiConfig } from "./constants.js";

function ApiConstructor(config) {

  ApiConstructor.prototype.checkResponse = function (res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // регистрация пользователя - signUp
  ApiConstructor.prototype.signUp = (data) => {
    return fetch(`${config.baseUrl}/signup`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify(data),
      credentials: 'include',
    }).then((res) => { return this.checkResponse(res) });
  }
  // авторизация пользователя - signIn
  ApiConstructor.prototype.signIn = (data) => {
    return fetch(`${config.baseUrl}/signin`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify(data),
      credentials: 'include',
    }).then((res) => { return this.checkResponse(res) });
  }

  ApiConstructor.prototype.checkAuth = (token) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'GET',
      headers: config.headers,
      credentials: 'include'
    }).then((res) => { return this.checkResponse(res) });
  }

  ApiConstructor.prototype.signOut = (token) => {
    return fetch(`${config.baseUrl}/signout`, {
      method: 'POST',
      headers: config.headers,
      credentials: 'include'
    }).then((res) => { return this.checkResponse(res) });
  }

  ApiConstructor.prototype.updateProfile = (profile) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      credentials: 'include',
      body: JSON.stringify({
        name: profile.name,
        email: profile.email,
      })
    }).then((res) => { return this.checkResponse(res) });
  }

  ApiConstructor.prototype.getUserInfo = function () {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'GET',
      headers: config.headers,
      credentials: 'include',
    }).then((res) => { return this.checkResponse(res) });
  }

  ApiConstructor.prototype.getSavedCards = () => {
    return fetch(`${config.baseUrl}/movies`, {
      method: 'GET',
      headers: config.headers,
      credentials: 'include',
    }).then((res) => { return this.checkResponse(res) });
    // .then((data) => {
    //   return data;
    // })
  }

  ApiConstructor.prototype.saveCard = (card) => {
    return fetch(`${config.baseUrl}/movies`, {
      method: 'POST',
      headers: config.headers,
      credentials: 'include',
      body: JSON.stringify({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: 'https://api.nomoreparties.co' + card.image.url,
        trailerLink: card.trailerLink,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        thumbnail: 'https://api.nomoreparties.co' + card.image.formats.thumbnail.url,
        movieId: card.id,
      })
    }).then((res) => { return this.checkResponse(res) });
  }

  ApiConstructor.prototype.deleteCard = (id) => {
    return fetch(`${config.baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: config.headers,
      credentials: 'include',
    }).then((res) => { return this.checkResponse(res) });
  }
}

export const MainApi = new ApiConstructor(apiConfig);
