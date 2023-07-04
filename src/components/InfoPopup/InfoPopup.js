import React from 'react';

export const InfoPopup = (props) => {

  return (
    <div className={`info-popup ${props.isOpen ? "info-popup_opened" : null}`}>
      <div className={`info-popup__container ${props.isOpen && "info-popup__container_opened"}`}>
        <button type="button" aria-label="Закрыть"
        className="info-popup__close-button" onClick={props.onClose}></button>
        <p className='info-popup__message'>{props.infoMessage}</p>
      </div>
    </div>
  );
};