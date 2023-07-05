import React from "react";
import icon from "../../images/searchform/icon.svg";
import { useFormWithValidation } from "../../hooks/validation";


export const SearchForm = (props) => {
  const { onSearch, isDisabled, onSliderClick, onInputChange, search, isShort } = props;

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = React.useState(isDisabled);

  const { handleChange, errors } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  }

  function handleSliderClick() {
    onSliderClick(isShort);
  }

  function handleInputChange(e) {
    onInputChange(e);
    handleChange(e);
  }

  React.useEffect(() => {
    if (errors["movie"] === '') {
      setIsSubmitButtonDisabled(false);
    } else {
      setIsSubmitButtonDisabled(true)
    }
  }, [onInputChange])

  return (
    <section className="search-form">
      <div className="search-form__container">
        <div className="search-form__searching-container">
          <img className="search-form__icon" src={icon} alt="иконка" />
          <form name="Поиск фильма" className="search-form__form" onSubmit={handleSubmit}>
            <div className="search-form__input-container" >
              <input value={search} name="movie" onChange={handleInputChange} placeholder="Фильм"
                minLength='2' required className="search-form__input" />
              <span className={`search-form__input-error ${errors["movie"] && 'search-form__input-error_visible'}`}>{errors["movie"]}</span>
            </div>
            <button className="search-form__button" type="submit" disabled={isSubmitButtonDisabled} name="Найти фильм"></button>
          </form>
        </div>
        <div className="search-form__slider-container">
          <input className="search-form__checkbox-component" type="checkbox"
            id="shortmovies" checked={isShort} onClick={handleSliderClick} />
          <label className="search-form__slider" for="shortmovies"></label>
          <span className="search-form__label-text">Короткометражки</span>
        </div>
      </div>
    </section>
  )
}