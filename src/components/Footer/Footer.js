import React from "react";
import { Container } from "../Container/Container";

export const Footer = () => {

  return (
    <Container type="footer">
      <footer className="footer">
        <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__content">
          <p className="footer__copyright">© 2023</p>
          <div className="footer__links">
            <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
            <a className="footer__link" href="https://github.com/">Github</a>
          </div>
        </div>
      </footer>
    </Container>
  )
}