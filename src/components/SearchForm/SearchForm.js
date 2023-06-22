import React from "react";
import icon from "../../images/searchform/icon.svg"

export const SearchForm = () => {

  return (
    <section className="search-form">
      <div className="search-form__container">
        <div className="search-form__searching-container">
          <img className="search-form__icon" src={icon} alt="иконка" />
          <form name="Поиск фильма" className="search-form__form">
            <input placeholder="Фильм" minLength='2' required className="search-form__input" />
            <button className="search-form__button" type="submit" name="Найти фильм"></button>
          </form>
        </div>
        <div className="search-form__slider-container">
          <input className="search-form__checkbox-component" type="checkbox" id="shortmovies" />
          <label className="search-form__slider" for="shortmovies"></label>
          <span className="search-form__label-text">Короткометражки</span>
        </div>
      </div>
    </section>
  )
}