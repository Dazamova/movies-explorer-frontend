import { moviesApiConfig } from "./constants.js";

function ApiConstructor(config) {

  ApiConstructor.prototype.checkResponse = function (res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  ApiConstructor.prototype.getMovies = () => {
    return fetch(`${config.baseUrl}/beatfilm-movies`, {
      method: 'GET',
      // headers: config.headers,
      // credentials: 'include',
    }).then((res) => { return this.checkResponse(res) });
  }
}

export const MoviesApi = new ApiConstructor(moviesApiConfig);
