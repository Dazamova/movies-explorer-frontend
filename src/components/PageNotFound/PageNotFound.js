import React from "react";
import { useNavigate } from 'react-router-dom';

export const PageNotFound = (props) => {

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="page-not-found">
      <div className="page-not-found__container">
        <p className="page-not-found__err-code">404</p>
        <p className="page-not-found__text">Страница не найдена</p>
      </div>
      <p className="page-not-found__back-button" onClick={goBack}>Назад</p>
    </div>
  )
}