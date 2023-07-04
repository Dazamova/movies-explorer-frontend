import React from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { MainApi } from "../../utils/MainApi";
import { ERROR_MESSAGE } from "../../utils/constants";
import { SHORTMOVIE_DURATION } from "../../utils/constants";

export const SavedMovies = (props) => {
  const { onError } = props;

  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState(''); // переменная, хранящая в себе данные формы поиска по сохраненным фильмам
  const [filterString, setFilterString] = React.useState(null);
  const [isShort, setIsShort] = React.useState(false);
  const [isMovieLoading, setIsMovieLoading] = React.useState(false);

  React.useEffect(() => {
    setIsMovieLoading(true);
    MainApi.getSavedCards().then((cards) => {
      setMovies(cards);
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

  function handleSubmit() {
    if (search === null) {
      console.log('error!')
    }
    setFilterString(search);
  }

  // фильтрация массива фильмов по строке поиска
  const filteredMovies = React.useMemo(() => {

    if (!filterString) {
      return movies;
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

    return filtered;
  }, [filterString, movies, isShort])

  const notFound = (filterString || isShort) && filteredMovies.length === 0; // принимает значения true/false

  function handleDeleteCard(card) {
    // устанавливаю константу, в которую записываю фильм из массива "Сохраненные фильмы", совпадающий с удаляемым
    const movieToDelete = movies.find(movie => movie.movieId === card.movieId);

    MainApi.deleteCard(movieToDelete._id).then((deletedCard) => {
      setMovies(state => state.filter(c => c._id !== deletedCard._id))
      console.log("удалено", deletedCard);
    }).catch((rej) => {
      onError(ERROR_MESSAGE)
    })
  }

  return (
    <main className="saved-movies">
      <SearchForm search={search} isShort={isShort} onSearch={handleSubmit} onSliderClick={handleIsShortMovie} onInputChange={handleInputChange} />
      <MoviesCardList isMovieLoading={isMovieLoading} isNotFound={notFound}>
        <>
          {filteredMovies.map((card) =>
            <MoviesCard key={card.id} card={card} src={card.image} onDeleteCard={handleDeleteCard} />
          )}
        </>
      </MoviesCardList>
    </main>
  )
}