import React from "react";

export const NavTab = () => {
  return (
    <ul className="nav-tab">
      <li className="nav-tab__item">
        <a className="nav-tab__link" href="#aboutProject">О проекте</a>
      </li>
      <li className="nav-tab__item">
        <a className="nav-tab__link" href="#techs">Технологии</a>
      </li>
      <li className="nav-tab__item">
        <a className="nav-tab__link" href="#aboutMe">Студент</a>
      </li>
    </ul>
  )
}