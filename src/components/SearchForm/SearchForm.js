import React from "react";
import icon from "../../images/searchform/icon.svg"

export const SearchForm = () => {

  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__searching-container">
          <img className="search-form__icon" src={icon} alt="иконка" />
          <form name="Поиск фильма" className="search-form__form">
            <input placeholder="Фильм" className="search-form__input" />
            <button className="search-form__button" type="submit" name="Найти фильм"></button>
          </form>
        </div>
        <div className="search-form__slider-container">
          <label className="search-form__slider">
            <input className="search-form__checkbox-component" type="checkbox" id="shortmovies" />
            <div className="search-form__slider-div"></div>
          </label>
          <span className="search-form__label-text">Короткометражки</span>
        </div>
      </div>
    </div>
  )
}