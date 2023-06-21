import React from "react";

export const NavBarButton = (props) => {
  return (
    <div className={`navbar-button ${props.isNavBarOpen && 'navbar-button_clicked'}`}>
      <button className={`navbar-button__container ${props.isNavBarOpen && 'navbar-button__container_clicked'}`} onClick={props.onClick}>
        <span className='navbar-button__span'></span>
        <span className='navbar-button__span'></span>
        <span className='navbar-button__span'></span>
      </button>
    </div>
  );
}