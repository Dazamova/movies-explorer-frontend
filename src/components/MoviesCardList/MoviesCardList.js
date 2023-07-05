import React from "react";
import Preloader from "../Preloader/Preloader";

export const MoviesCardList = (props) => {
  return (
    <section className="movies-card-list" >
      {props.isNotFound && <span className="movies-card-list__not-found">Ничего не найдено</span>}
      <div className={`movies-card-list__container ${props.isNotFound ? 'movies-card-list__container_hide' : ''} ${props.isMoviesLoading ? 'movies-card-list__container_hide' : ''}`}>
        {props.children}
      </div>
      {props.isMoviesLoading && <Preloader />}
    </section>

  )
}