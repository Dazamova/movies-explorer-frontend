import React from "react";
import { SectionHeader } from "../SectionHeder/SectionHeader";

export const AboutProject = () => {
  return (
    <div className="about-project" id="aboutProject">
      <SectionHeader header="О проекте"/>
      <div className="about-project__grid">
        <div className="about-project__grid-item">
          <h3 className="about-project__heading">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__grid-item">
          <h3 className="about-project__heading">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__tracker">
        <div className="about-project__stage">
          <div className="about-project__track-line about-project__track-line_style_black">1 неделя</div>
          <div className="about-project__caption">Back-end</div>
        </div>
        <div className="about-project__stage">
          <div className="about-project__track-line">4 недели</div>
          <div className="about-project__caption">Front-end</div>
        </div>
      </div>
    </div>
  )
}