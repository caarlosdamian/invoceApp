import React from "react";
import { Link, useLocation } from "react-router-dom";
import arrow_down from "../../assets/icon-arrow-down.svg";

import "./Details.scss";

export const Details = () => {
  const location = useLocation();

  return (
    <div className="details__container">
      <Link to='/' className="details__container-top">
        <img src={arrow_down} alt="arrrow-left" className="arrow-left" />
        <span className="details__container-top-label">Go Back</span>
      </Link>
      <div className="details__container-middle"></div>
      <div className="details__container-main">Details</div>
    </div>
  );
};
