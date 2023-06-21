import React from "react";

export const MoviesCardList = (props) => {
  return (
    <div className="movies-card-list">
      {props.children}
    </div>
  )
}