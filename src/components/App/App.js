import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import '../../index.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { AuthProtectedRoute } from '../AuthProtectedRoute/AuthProtectedRoute';
import { Main } from '../Main/Main.js';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Login } from '../Login/Login.js';
import { Register } from '../Register/Register.js';
import { Movies } from '../Movies/Movies.js';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { PageNotFound } from '../PageNotFound/PageNotFound'
import { Container } from '../Container/Container';
import { NavBar } from '../NavBar/NavBar';
import { InfoPopup } from '../InfoPopup/InfoPopup';
import { MainApi } from '../../utils/MainApi';
import { DESKTOP_SCREENWIDTH } from '../../utils/constants';
import { UPDATE_PROFILE_ERROR } from '../../utils/constants';
import { SIGN_UP_ERROR } from '../../utils/constants';
import { SIGN_IN_ERROR } from '../../utils/constants';
import { UPDATE_PROFILE_MESSAGE } from '../../utils/constants';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [isNavBarOpen, setIsNavBarOpen] = React.useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState('');
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  const handleResize = React.useCallback(debounce(() => {
    setScreenWidth(window.innerWidth);
    if (window.innerWidth > DESKTOP_SCREENWIDTH) {
      setIsNavBarOpen(false);
    }
  }, 700), [screenWidth]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // редактирование профиля пользователя
  function handleUpdateUser(formData) {
    const name = formData.name;
    const email = formData.email;

    MainApi.updateProfile({ name, email }).then((data) => {
      console.log(data);
      setCurrentUser(data);
      setIsInfoPopupOpen(true);
      setInfoMessage(UPDATE_PROFILE_MESSAGE);
    }).catch((rej) => {
      setIsInfoPopupOpen(true);
      setInfoMessage(UPDATE_PROFILE_ERROR);
    })
  }

  // регистрация пользователя и последующая авторизация, перенаправляет сразу на главную страницу
  function handleSignUp(formData) {
    MainApi.signUp(formData).then(() => {
      handleSignIn(formData);
    }).catch((rej) => {
      setIsInfoPopupOpen(true);
      setInfoMessage(SIGN_UP_ERROR);
    })
  }

  // авторизация пользователя - signIn
  function handleSignIn(formData) {
    const email = formData.email;
    const password = formData.password;

    MainApi.signIn({ email, password }).then((data) => {
      setCurrentUser({ name: data.name, email: data.email })
      setIsLoggedIn(true);
      navigate("/movies");
    }).catch((rej) => {
      setIsInfoPopupOpen(true);
      setInfoMessage(SIGN_IN_ERROR);
    })
  }

  // проверка наличия токена
  React.useEffect(() => {
    MainApi.checkAuth().then((user) => {
      setCurrentUser(user);
      setIsLoggedIn(true);
      navigate({ replace: false });
      // navigate("/");
    }).catch(rej => {
      console.log(rej)
    })
  }, [])

  function handleSignOut() {
    MainApi.signOut().then(() => {
      setCurrentUser({});
      setIsLoggedIn(false);
      localStorage.clear();
      navigate("/")
    }).catch(rej => {
      console.log(rej)
    })
  }

  function handleNavBarButtonClick() {
    setIsNavBarOpen(!isNavBarOpen);
  }

  function handleNavBarClick() {
    setIsNavBarOpen(false);
  }

  function handleInfoPopupClose() {
    setIsInfoPopupOpen(false);
  }

  function handleInfoPopupOpen(errMessage) {
    setIsInfoPopupOpen(true);
    setInfoMessage(errMessage);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="signin" element={
            <AuthProtectedRoute isLoggedIn={isLoggedIn}>
              <>
                <Container type="auth">
                  <Header isAuth={true} isLoggedIn={false} isMain={false} />
                  <Login onSubmit={handleSignIn} />
                </Container>
              </>
            </AuthProtectedRoute>
          } />
          <Route path="signup" element={
            <AuthProtectedRoute isLoggedIn={isLoggedIn}>
              <>
                <Container type="auth">
                  <Header isAuth={true} isLoggedIn={false} isMain={false} />
                  <Register onSubmit={handleSignUp} />
                </Container>
              </>
            </AuthProtectedRoute>
          } />
          <Route path="/" element={
            <>
              <Header isAuth={false} isMain={true} isNavBarOpen={isNavBarOpen} onNavBarButtonClick={handleNavBarButtonClick} isLoggedIn={isLoggedIn} />
              <Main />
              <Footer />
            </>
          } />
          <Route path="movies" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <>
                <Header isAuth={false} isMain={false} isNavBarOpen={isNavBarOpen} onNavBarButtonClick={handleNavBarButtonClick} isLoggedIn={isLoggedIn} />
                <Container type="movies">
                  <Movies onError={handleInfoPopupOpen} screenWidth={screenWidth} />
                </Container>
                <Footer />
              </>
            </ProtectedRoute>
          } />
          <Route path="saved-movies" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <>
                <Header isAuth={false} isMain={false} isNavBarOpen={isNavBarOpen} onNavBarButtonClick={handleNavBarButtonClick} isLoggedIn={isLoggedIn} />
                <Container type="movies">
                  <SavedMovies onError={handleInfoPopupOpen} />
                </Container>
                <Footer />
              </>
            </ProtectedRoute>
          } />
          <Route path="profile" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <>
                <Header isAuth={false} isMain={false} isNavBarOpen={isNavBarOpen} onNavBarButtonClick={handleNavBarButtonClick} isLoggedIn={isLoggedIn} />
                <Container type="profile">
                  <Profile onUpdateUser={handleUpdateUser} onSignOut={handleSignOut} />
                </Container>
              </>
            </ProtectedRoute>
          } />
          <Route path="*" element={
            <PageNotFound />
          } />
        </Routes>
        <NavBar isOpen={isNavBarOpen} onNavBarClick={handleNavBarClick} />
        <InfoPopup isOpen={isInfoPopupOpen} onClose={handleInfoPopupClose} infoMessage={infoMessage} />
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;