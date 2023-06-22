import React from "react";

export const MoviesCardList = (props) => {
  return (
    <section className="movies-card-list">
      {props.children}
    </section>
  )
}