import React from "react";
import { AboutMe } from "./AboutMe/AboutMe.js";
import { AboutProject } from "./AboutProject/AboutProject.js";
import { Techs } from "./Techs/Techs.js";
import { Portfolio } from "./Portfolio/Portfolio.js";
import { Promo } from "./Promo/Promo.js";
import { NavTab } from "./NavTab/NavTab.js";
import { Container } from "../Container/Container.js";

export const Main = () => {

  return (
    <section className="main">
      <Container type="landing">
        <Promo>
          <NavTab />
        </Promo>
        <AboutProject />
      </Container>
      <Techs />
      <Container type="landing">
        <AboutMe />
        <Portfolio />
      </Container>
    </section>
  )
}