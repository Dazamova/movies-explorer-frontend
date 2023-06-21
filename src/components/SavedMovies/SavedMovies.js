import React from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { title, duration, image1, image2, image3 } from "../../utils/constants"

export const SavedMovies = () => {
  // const [isSaved, setIsSaved] = React.useState(false);
  // function saveCard() {
  //   setIsSaved(!isSaved);
  //   console.log(isSaved);
  // }

  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList>
        {/* <MoviesCard title={title} duration={duration} link={image1} isSaved={isSaved} onSaveCard={saveCard} /> */}
        <MoviesCard title={title} duration={duration} link={image1} />
        <MoviesCard title={title} duration={duration} link={image2} />
        <MoviesCard title={title} duration={duration} link={image3} />
      </MoviesCardList>
    </div>
  )
}