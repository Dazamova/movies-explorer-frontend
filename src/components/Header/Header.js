import React from "react";
import logo from "../../images/logo/logo.svg";
import { Navigation } from "../Navigation/Navigation";
import { NavLink, useNavigate } from 'react-router-dom';
import { NavBarButton } from "../NavBarButton/NavBarButton";
// import { NavBar } from "../NavBar/NavBar";

export const Header = (props) => {

  const navigate = useNavigate();

  function toMainPage() {
    navigate("/");
  }

  return (
    <header className={`header ${props.isAuth ? 'header_type_auth' : null}`}>
      <img className="header__logo" alt="Логотип" src={logo} onClick={toMainPage}/>
      {props.isLoggedIn ? (
        <>
          <Navigation isNavBar={false} isNavBarOpen={false} />
          <NavBarButton isNavBarOpen={props.isNavBarOpen} onClick={props.onNavBarButtonClick} />
        </>
      ) : props.isMain ? (
        <div className="header__auth-links">
          <NavLink to="/signup" className="header__signup-button header__link">Регистрация</NavLink>
          <NavLink to="/signin" className="header__signin-button header__link">Войти</NavLink>
        </div>
      ) : null
      }
    </header>
  )
}