import React from "react";

export const PortfolioProject = (props) => {
  return (
    <li className="project">
      <a className="project__link" target="_blank" rel="noreferrer" href={props.link}>
        <div className="project__container">
          <p className="project__name">{props.project}</p>
          <span className="project__button">↗</span>
        </div>
      </a>
    </li>
  )
}