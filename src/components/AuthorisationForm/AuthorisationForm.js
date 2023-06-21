import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

export const AuthorisationForm = (props) => {
  const { pathname } = useLocation();

  return (
    <div className="authorisation">
      {/* <div className="authorisation__container"> */}
        <h2 className="authorisation__heading">{props.header}</h2>
        <form name="authorisation-form" className="authorisation__form" onSubmit={props.onSubmit}>
          <div className="authorisation__inputs">
            {props.children}
          </div>
          <button name="submit" type="submit" className="authorisation__submit-button">{props.buttonText}</button>
        </form>
        {pathname === '/signup' ? (
          <span className='authorisation__offer'>Уже зарегистрированы? <NavLink className="authorisation__link" to="/signin">Войти</NavLink>
          </span>
        ) : (
          <span className='authorisation__offer'>Ещё не зарегистрированы? <NavLink className="authorisation__link" to="/signup">Регистрация</NavLink>
          </span>
        )}
      {/* </div> */}
    </div>
  )
}