import React from "react";
import { SectionHeader } from "../SectionHeder/SectionHeader";
import { TechItem } from "../TechItem/TechItem";

export const Techs = () => {
  return (
    <section className="techs" id="techs">
      <SectionHeader header="Технологии" />
      <h2 className="techs__heading">7 технологий</h2>
      <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__tab">
        <TechItem name="HTML" />
        <TechItem name="CSS" />
        <TechItem name="JS" />
        <TechItem name="React" />
        <TechItem name="Git" />
        <TechItem name="Express.js" />
        <TechItem name="mongoDB" />
      </ul>
    </section>
  )
}