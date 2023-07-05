import React from "react";
import { useLocation } from 'react-router-dom';
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export const MoviesCard = (props) => {
  const { card, src, isCardSaved, onSaveCard, onDeleteCard } = props;
  const { pathname } = useLocation();

  const [isSaved, setIsSaved] = React.useState(false);
  // const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (isCardSaved) {
      setIsSaved(true);
    }
  }, [])

  function convertTime(min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  }

  function handleSaveCard() {
    onSaveCard(card, isSaved, setIsSaved);
  }

  function handleDeleteCard() {
    onDeleteCard(card, setIsSaved)
  }

  const cardSaveButtonClassName = (`movies-card__button movies-card__button_type_save ${isSaved && 'movies-card__button_type_save-active'}`);

  return (
    <div className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__description">
          <h3 className="movies-card__title">{card.nameRU}</h3>
          <p className="movies-card__duration">{convertTime(card.duration)}</p>
        </div>
        {pathname === '/movies' ? (
          <button type="button" aria-label="Сохранить" className={cardSaveButtonClassName} onClick={isSaved ? handleDeleteCard : handleSaveCard }></button>
        ) : (
          <button type="button" aria-label="Удалить из сохраненных фильмов" className='movies-card__button movies-card__button_type_delete' onClick={handleDeleteCard}></button>
        )}
      </div>
      <div className="movies-card__poster-container">
        <a className="movies-card__poster_link" href={card.trailerLink} target="_blank" rel="noreferrer">
          <img className="movies-card__poster" src={src} alt={card.nameRU} />
        </a>
      </div>
    </div>
  )
}