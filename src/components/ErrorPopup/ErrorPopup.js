import React from 'react';

export const ErrorPopup = (props) => {

  return (
    <div className={`error-popup ${props.isOpen ? "error-popup_opened" : null}`}>
      <div className={`error-popup__container ${props.isOpen && "error-popup__container_opened"}`}>
        <button type="button" aria-label="Закрыть"
        className="error-popup__close-button" onClick={props.onClose}></button>
        <p className='error-popup__message'>{props.errorMessage}Что-то пошло не так! ААААААА!!!</p>
      </div>
    </div>
  );
};