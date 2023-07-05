import React from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { MoviesApi } from "../../utils/MoviesApi";
import { MainApi } from "../../utils/MainApi";
import { ERROR_MESSAGE } from "../../utils/constants";
import {  SHORTMOVIE_DURATION, DESKTOP_SCREENWIDTH, TABLET_SCREENWIDTH, DESKTOP_NUMBER_OF_CARDS, TABLET_NUMBER_OF_CARDS, MOBILE_NUMBER_OF_CARDS, DESKTOP_NUMBER_OF_ADDED_CARDS,
  TABLET_NUMBER_OF_ADDED_CARDS, MOBILE_NUMBER_OF_ADDED_CARDS } from "../../utils/constants";

export const Movies = (props) => {
  const { onError, screenWidth } = props;

  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState(''); // переменная, хранящая в себе данные формы поиска
  const [filterString, setFilterString] = React.useState(null);
  const [isShort, setIsShort] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [savedIds, setSavedIds] = React.useState(null); // id сохраненных фильмов
  const [savedMovies, setSavedMovies] = React.useState([]); //для того, чтобы найти нужный айдишник для удаления
  const [isMovieLoading, setIsMovieLoading] = React.useState(false);

  React.useEffect(() => {
    setIsMovieLoading(true);
    MainApi.getSavedCards().then((cards) => {
      setSavedMovies(cards);
    }).catch((rej) => {
      onError(ERROR_MESSAGE)
    }).finally(()=> {
      setIsMovieLoading(false)
    })
  }, [])

  // при нажатии на кнопку вызывается эта функция - она перезаписывает isShort на противоположное
  function handleIsShortMovie() {
    setIsShort(!isShort);
  }

  // эта функция отслеживает ввод запроса в инпут (еще до отправки)
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  }

  function loadAllMovies() {
    MoviesApi.getMovies().then((data) => {
      setMovies(data);
    }).catch((rej) => {
      onError(ERROR_MESSAGE)
    })
  }

  // получение фильмов и параметров поиска при монтировании
  React.useEffect(() => {
    loadAllMovies();

    const savedSearch = localStorage.getItem("search");
    const savedIsShort = localStorage.getItem("isShort");

    if (savedSearch) {
      setSearch(savedSearch);
      setFilterString(savedSearch);
    }

    if (savedIsShort === "true") {
      setIsShort(savedIsShort === "true");
    }
  }, []);

  function handleSubmit() {
    setPage(0);

    if (search === null) {
      console.log('error!')
    }
    setFilterString(search);
  }

  // фильтрация массива фильмов по строке поиска
  const filteredMovies = React.useMemo(() => {

    if (!filterString) {
      return [];
    }

    const filtered = movies.filter((movie) => {
      const nameRU = movie.nameRU.toLowerCase();
      const nameEN = movie.nameEN.toLowerCase();
      const str = filterString.toLowerCase();

      if (isShort && movie.duration > SHORTMOVIE_DURATION) {
        return false;
      }

      return nameRU.includes(str) || nameEN.includes(str);
    });

    localStorage.setItem("search", filterString);
    localStorage.setItem("isShort", JSON.stringify(isShort));

    return filtered;
  }, [filterString, movies, isShort])

  const notFound = (filterString || isShort) && filteredMovies.length === 0; // принимает значения true/false

  //рендер фильмов в зависимости от ширины страницы
  const moviesToRender = React.useMemo(() => {
    const countToRender = screenWidth < TABLET_SCREENWIDTH ? MOBILE_NUMBER_OF_CARDS : screenWidth < DESKTOP_SCREENWIDTH ? TABLET_NUMBER_OF_CARDS : DESKTOP_NUMBER_OF_CARDS;
    const cardToRender = screenWidth < TABLET_SCREENWIDTH ? MOBILE_NUMBER_OF_ADDED_CARDS : screenWidth < DESKTOP_SCREENWIDTH ? TABLET_NUMBER_OF_ADDED_CARDS : DESKTOP_NUMBER_OF_ADDED_CARDS;

    return filteredMovies.slice(0, countToRender + page * cardToRender);
  }, [filteredMovies, page, screenWidth]);


  const handleMoreClick = React.useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  // При изменении в массиве savedCards в стейт savedIds записывается объект Set
  // с айди сохраненных фильмов
  React.useEffect(() => {
    const ids = savedMovies.map(({ movieId }) => movieId);
    const set = new Set(ids);
    setSavedIds(set);

  }, [savedMovies])

  function handleSaveCard(movie, isMovieSaved, setIsMovieSaved) {
    if (!isMovieSaved) {
      MainApi.saveCard(movie).then((savedMovie) => {
        setIsMovieSaved(true);
        setSavedMovies([savedMovie, ...savedMovies])
      }).catch((rej) =>
        onError(ERROR_MESSAGE)
      )
    }
  }

  function handleDeleteCard(card, setIsMovieSaved) {
    // устанавливаю константу, в которую записываю фильм из массива "Сохраненные фильмы", совпадающий с удаляемым
    const movieToDelete = savedMovies.find(movie => movie.movieId === card.id);
    console.log(movieToDelete);

    MainApi.deleteCard(movieToDelete._id).then((deletedCard) => {
      setIsMovieSaved(false);
      console.log("удалено", deletedCard);
    }).catch((rej) =>
      onError(ERROR_MESSAGE)
    )
  }

  return (
    <main className="movies">
      <SearchForm search={search} isShort={isShort} onSearch={handleSubmit} onSliderClick={handleIsShortMovie} onInputChange={handleInputChange} />
      <MoviesCardList  isMovieLoading={isMovieLoading} isNotFound={notFound} >
        <>
          {moviesToRender.map((card) => {
            if (savedIds.has(card.id)) {
              return <MoviesCard key={card.id} card={card} src={`${'https://api.nomoreparties.co/' + card.image.url}`} isCardSaved={true} onSaveCard={handleSaveCard} onDeleteCard={handleDeleteCard} />
            } else {
              return <MoviesCard key={card.id} card={card} src={`${'https://api.nomoreparties.co/' + card.image.url}`} isCardSaved={false} onSaveCard={handleSaveCard} onDeleteCard={handleDeleteCard} />
            }
          })}
        </>
      </MoviesCardList>
      {filteredMovies > moviesToRender && (
        <button onClick={handleMoreClick} className="movies__button-load-more" type="button" aria-label="Загрузить еще">Ещё</button>
      )}
    </main>
  )
}