import React from "react";

export const Promo = (props) => {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный&nbsp;проект студента факультета Веб-разработки.</h1>
        {props.children}
      </div>
    </section>
  )
}