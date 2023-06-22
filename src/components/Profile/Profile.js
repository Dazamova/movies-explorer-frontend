import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export const Profile = (props) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isLinksContainerDisplay, setLinksContainerDisplay] = React.useState(true);
  const [isSubmitContainerDisplay, setSubmitContainerDisplay] = React.useState(false);
  const [isInputDisabled, setInputDisabled] = React.useState(true);

  // После загрузки текущего пользователя из API его данные будут в инпутах
  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);


  function handleChangeProfile() {
    setLinksContainerDisplay(false);
    setSubmitContainerDisplay(true);
    setInputDisabled(false);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      email,
    });

    setLinksContainerDisplay(true);
    setSubmitContainerDisplay(false);
  }

  return (
    <main className="profile">
      <h2 className="profile__heading">Привет, {name}!</h2>
      <form name="profile-form" className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__inputs">
          <div className="profile__input">
            <p className="profile__placeholder">Имя</p>
            <input id="name" type="text" name="name" value={name || ''} onChange={handleChangeName} className="profile__input-field"
              minLength="2" maxLength="20" required disabled={isInputDisabled} />
          </div>
          <div className="profile__input">
            <p className="profile__placeholder">Почта</p>
            <input id="email" type="email" name="email" value={email || ''} onChange={handleChangeEmail}
              className="profile__input-field" minLength="6" maxLength="40" required disabled={isInputDisabled} />
          </div>
        </div>
        <div className="profile__buttons-container">
          {isLinksContainerDisplay &&
            <div className="profile__links-container">
              <span className="profile__edit-button" onClick={handleChangeProfile}>Редактировать</span>
              <span className="profile__exit-button" onClick={props.onSignOut}>Выйти из аккаунта</span>
            </div>
          }
          {isSubmitContainerDisplay &&
            <div className="profile__submit-container">
              <span className="profile__error-message">При обновлении профиля произошла ошибка.</span>
              <button name="submit" type="submit" className="profile__submit-button">Сохранить</button>
            </div>
          }
        </div>
      </form>
    </main>
  )
}
