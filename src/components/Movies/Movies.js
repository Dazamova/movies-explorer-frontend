import React from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { title, duration, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12 } from "../../utils/constants"

export const Movies = () => {
  // const [isSaved, setIsSaved] = React.useState(false);
  // function saveCard() {
  //   setIsSaved(!isSaved);
  //   console.log(isSaved);
  // }

  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList>
        {/* <MoviesCard title={title} duration={duration} link={image1} isSaved={isSaved} onSaveCard={saveCard} /> */}
        <MoviesCard title={title} duration={duration} link={image1} />
        <MoviesCard title={title} duration={duration} link={image2} />
        <MoviesCard title={title} duration={duration} link={image3} />
        <MoviesCard title={title} duration={duration} link={image4} />
        <MoviesCard title={title} duration={duration} link={image5} />
        <MoviesCard title={title} duration={duration} link={image6} />
        <MoviesCard title={title} duration={duration} link={image7} />
        <MoviesCard title={title} duration={duration} link={image8} />
        <MoviesCard title={title} duration={duration} link={image9} />
        <MoviesCard title={title} duration={duration} link={image10} />
        <MoviesCard title={title} duration={duration} link={image11} />
        <MoviesCard title={title} duration={duration} link={image12} />
      </MoviesCardList>
      <button className="movies__button-load-more" type="button" aria-label="Загрузить еще">Ещё</button>
    </div>
  )
}