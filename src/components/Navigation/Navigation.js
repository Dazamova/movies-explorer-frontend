import React from "react";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Navigation = (props) => {
  const { pathname } = useLocation();

  return (
    <div className={`navigation ${props.isNavBar ? 'navigation_type_nav-bar' : 'navigation_type_header'}`}>
      <ul className={`navigation__pages ${props.isNavBar ? 'navigation__pages_type_nav-bar' : ''}`}>

        {props.isNavBar && (
          <li className="navigation__page">
            {/* <p className="navigation__link navigation__page-link navigation__page-link_type_nav-bar" onClick={toMainPage} >Главная</p> */}
            <NavLink to="/" className="navigation__link navigation__page-link navigation__page-link_type_nav-bar" onClick={props.onNavBarClick}>Главная</NavLink>
          </li>
        )}

        <li className="navigation__page">
          <NavLink to="/movies" onClick={props.onNavBarClick} className={`navigation__link navigation__page-link ${pathname === '/movies' && 'navigation__page-link_type_selected'} ${props.isNavBar && 'navigation__page-link_type_nav-bar'}`}>Фильмы</NavLink>
        </li>
        <li className="navigation__page">
          <NavLink to="/saved-movies" onClick={props.onNavBarClick} className={`navigation__link navigation__page-link ${pathname === '/saved-movies' && 'navigation__page-link_type_selected'} ${props.isNavBar && 'navigation__page-link_type_nav-bar'}`}>Сохраненные фильмы</NavLink>
        </li>
      </ul>

      <div className={`navigation__buttons ${props.isNavBar && 'navigation__buttons_type_nav-bar'}`}>
        <NavLink to="/profile" onClick={props.onNavBarClick} className="navigation__account-button navigation__link">Аккаунт</NavLink>
      </div>
    </div>
  )
}