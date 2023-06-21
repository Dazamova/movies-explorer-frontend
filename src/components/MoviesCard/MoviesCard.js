import React from "react";
import { useLocation } from 'react-router-dom';

export const MoviesCard = (props) => {
  const [isSaved, setIsSaved] = React.useState(false);
  const { pathname } = useLocation();

  function saveCard() {
    setIsSaved(!isSaved);
    console.log(isSaved);
  }

  function deleteCard() {

  }

  // const isSaved = props.isSaved;
  const cardSaveButtonClassName = (`movies-card__button movies-card__button_type_save ${isSaved && 'movies-card__button_type_save-active'}`);

  return (
    <div className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__description">
          <h3 className="movies-card__title">{props.title}</h3>
          <p className="movies-card__duration">{props.duration}</p>
        </div>
        {pathname === '/movies' ? (
          <button type="button" aria-label="Сохранить" className={cardSaveButtonClassName} onClick={saveCard}></button>
        ) : (
          <button type="button" aria-label="Удалить из сохранненных фильмов" className='movies-card__button movies-card__button_type_delete' onClick={deleteCard}></button>
        )}
      </div>
      <div className="movies-card__poster-container">
        <img className="movies-card__poster" src={props.link} alt={props.title} />
      </div>
    </div>
  )
}