import React from "react";
import { PortfolioProject } from "../PortfolioProject/PortfolioProject";

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__heading">Портфолио</h3>
      <ul className="portfolio__list">
        <PortfolioProject project="Статичный сайт" link="https://github.com/Dazamova/how-to-learn" />
        <PortfolioProject project="Адаптивный сайт" link="https://github.com/Dazamova/russian-travel" />
        <PortfolioProject project="Одностраничное приложение" link="https://github.com/Dazamova/react-mesto-api-full-gha" />
      </ul>
    </section>
  )
}