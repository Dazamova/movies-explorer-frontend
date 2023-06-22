import React from 'react';
import { Navigation } from '../Navigation/Navigation';

export const NavBar = (props) => {

  return (
    <div className={`navbar ${props.isOpen ? 'navbar_opened' : ''}`}>
      <div className={`navbar__container ${props.isOpen ? 'navbar__container_opened' : ''}`}>
        <Navigation onNavBarClick={props.onNavBarClick} isNavBar={true} isNavBarOpen={true} />
      </div>
    </div>
  );
};