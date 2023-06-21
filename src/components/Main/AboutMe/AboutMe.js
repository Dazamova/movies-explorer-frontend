import React from "react";
import { SectionHeader } from "../SectionHeder/SectionHeader";
import student from "../../../images/main/student.png";

export const AboutMe = () => {
  return (
    <div className="about-me" id="aboutMe">
      <SectionHeader header="Студент" />
      <div className="about-me__container">
        <div className="about-me__text-block">
          <div className="about-me__description">
            <h2 className="about-me__heading">Диана Галеева</h2>
            <h3 className="about-me__subheading">Начинающий фронтент разработчик, 26 лет</h3>
            <p className="about-me__paragraph">Из маленького города Шадринска я перебралась в Москву, получила высшее образование по специальности инженер-физик. После 3 лет работы в НИИ я решила сменить профессию на модную и молодежную. Вы наблюдаете мои первые, но уверенные шаги в веб-разработке.</p>
          </div>
          <a className="about-me__link" href="https://github.com/Dazamova">Github</a>
        </div>
        <img className="about-me__photo" src={student} alt="студент" />
      </div>
    </div>
  )
}