import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/validation";

export const Profile = (props) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isLinksContainerDisplay, setLinksContainerDisplay] = React.useState(true);
  const [isSubmitContainerDisplay, setSubmitContainerDisplay] = React.useState(false);
  const [isInputDisabled, setInputDisabled] = React.useState(true);
  const [isErrorDisplay, setIsErrorDisplay] = React.useState(false);
  // const [isSubmitButtonDisabled, setIsSubmitButtinDisabled] = React.useState(true);

  const { handleChange, errors } = useFormWithValidation();

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
    setIsErrorDisplay(false);
    handleChange(e);
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setIsErrorDisplay(false);
    handleChange(e);
    setEmail(e.target.value);
  }

  // React.useEffect(() => {
  //   // if(name !== currentUser.name || email !== currentUser.email) {
  //   //   if(!errors["name"] && !errors["email"]) {
  //   //     setIsSubmitButtinDisabled(false);
  //   //   }
  //   // }
  //   console.log('errors["name"]', errors["name"])
  // }, [name, email]);

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== currentUser.name || email !== currentUser.email) {
      // Передаём значения управляемых компонентов во внешний обработчик
      props.onUpdateUser({
        name,
        email,
      });

      setLinksContainerDisplay(true);
      setSubmitContainerDisplay(false);
      setInputDisabled(true);

    } else {
      setIsErrorDisplay(true);
    }
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
          <span className={`profile__input-error ${errors["name"] && "profile__input-error_visible"}`}>{errors["name"]}</span>
          <div className="profile__input">
            <p className="profile__placeholder">Почта</p>
            <input id="email" type="email" name="email" value={email || ''} onChange={handleChangeEmail}
              className="profile__input-field" minLength="6" maxLength="40" required disabled={isInputDisabled} />
          </div>
          <span className={`profile__input-error ${errors["email"] && "profile__input-error_visible"}`}>{errors["email"]}</span>
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
              {isErrorDisplay && <span className="profile__error-message">При обновлении профиля произошла ошибка - новые данные должны отличатся от текущих :)  </span>}
              <button name="submit" type="submit" disabled={errors["name"] || errors["email"]} className={`profile__submit-button ${(errors["name"] || errors["email"]) && 'profile__submit-button_disabled'}`}>Сохранить</button>
            </div>
          }
        </div>
      </form>
    </main>
  )
}
