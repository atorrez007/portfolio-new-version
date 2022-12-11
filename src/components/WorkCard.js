import "./WorkCardStyles.css";
import React from "react";

import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image1" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink
            to="https://atorrez007.github.io/Koinos-Burn-Calculator/"
            className="btn"
          >
            View
          </NavLink>
          <NavLink
            to="https://github.com/atorrez007/Koinos-Burn-Calculator/"
            className="btn"
          >
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
