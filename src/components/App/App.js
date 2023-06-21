import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import '../../index.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
import { ErrorPopup } from '../ErrorPopup/ErrorPopup';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: 'Виталий', email: '' });
  const [isNavBarOpen, setIsNavBarOpen] = React.useState(false);
  const [isErrorPopupOpen, setIsErrorPopupOpen] = React.useState(true);

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
    if (window.innerWidth > 1279) {
      setIsNavBarOpen(false);
    }
  }, 700), [screenWidth]);


  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  function handleUpdateUser(formData) {
    setCurrentUser(formData);
  }

  function handleSignUp(formData) {
    //эти данные нужно сохранить
    setCurrentUser({ name: formData.name, email: formData.email });
    navigate("/signin");
  }

  // авторизация пользователя - signIn
  function handleSignIn(formData) {
    //из этих данных извлечь и установить имя пользователя
    setCurrentUser((prevState) => ({ ...prevState, email: formData.email }));
    console.log(currentUser);
    setIsLoggedIn(true);
    navigate("/");
  }

  function handleSignOut() {
    navigate("/signin");
    setIsLoggedIn(false);
  }

  function handleNavBarButtonClick() {
    setIsNavBarOpen(!isNavBarOpen);
  }

  function handleNavBarClick() {
    setIsNavBarOpen(false);
  }

  function handleErrorPopupClose() {
    setIsErrorPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <body>
        <div className="app">
          {/* {pathname !== "*" && <Header />} */}
          <Routes>
            <Route path="signin" element={
              <>
                <Container type="auth">
                  <Header isAuth={true} isLoggedIn={false} isMain={false} />
                  <Login onSubmit={handleSignIn} />
                </Container>
              </>
            } />
            <Route path="signup" element={
              <>
                <Container type="auth">
                  <Header isAuth={true} isLoggedIn={false} isMain={false} />
                  <Register onSubmit={handleSignUp} />
                </Container>
              </>
            } />
            <Route path="/" element={
              <>
                <Header isAuth={false} isMain={true} isNavBarOpen={isNavBarOpen} onNavBarButtonClick={handleNavBarButtonClick} isLoggedIn={isLoggedIn} />
                <Main />
                <Footer />
              </>
            } />
            <Route path="movies" element={
              <>
                <Header isAuth={false} isMain={false} isNavBarOpen={isNavBarOpen} onNavBarButtonClick={handleNavBarButtonClick} isLoggedIn={isLoggedIn} />
                <Container type="movies">
                  <Movies />
                </Container>
                <Footer />
              </>
            } />
            <Route path="saved-movies" element={
              <>
                <Header isAuth={false} isMain={false} isNavBarOpen={isNavBarOpen} onNavBarButtonClick={handleNavBarButtonClick} isLoggedIn={isLoggedIn} />
                <Container type="movies">
                  <SavedMovies />
                </Container>
                <Footer />
              </>
            } />
            <Route path="profile" element={
              <>
                <Header isAuth={false} isMain={false} isNavBarOpen={isNavBarOpen} onNavBarButtonClick={handleNavBarButtonClick} isLoggedIn={isLoggedIn} />
                <Container type="profile">
                  <Profile onUpdateUser={handleUpdateUser} onSignOut={handleSignOut} />
                </Container>
              </>
            } />
            <Route path="*" element={
              <PageNotFound />
            } />
          </Routes>
          <NavBar isOpen={isNavBarOpen} onNavBarClick={handleNavBarClick} />
          <ErrorPopup isOpen={isErrorPopupOpen} onClose={handleErrorPopupClose}/>
        </div>
      </body>
    </CurrentUserContext.Provider>
  );
}
export default App;