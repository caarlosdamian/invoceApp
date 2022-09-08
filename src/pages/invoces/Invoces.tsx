import React, { useState } from "react";
import "./Invoces.scss";
import arrow_down from "../../assets/icon-arrow-down.svg";
import plus from "../../assets/icon-plus.svg";
import { useSelector } from "react-redux";

export const Invoces = () => {
  const [open, setOpen] = useState(false);
  const { dark } = useSelector((state: any) => state.theme);

  return (
    <div className="invoces__container">
      <div className="invoces__container--top--left">
        <h1 className={`invoces__container--top--header ${dark}`}>Invoices</h1>
        <span className={`invoces__container--top--subtitle ${dark}`}>
          There are 4 pending invoices
        </span>
      </div>
      <div className="invoces__container--middle">
        <span
          className={`invoces__container--middle-text ${dark}`}
          onClick={() => setOpen(!open)}
        >
          Filter by status
        </span>
        <img
          src={arrow_down}
          alt={arrow_down}
          className={`invoces__container--middle-img ${open ? "open" : ""}`}
        />
      </div>
      <div className="invoces__container--top--right">
        <div className="invoce__container--top--right--img--container">
          <img
            src={plus}
            alt={plus}
            className="invoces__container--top--right--img"
          />
        </div>
        <button className="invoces__container--top--button">New Invoice</button>
      </div>
    </div>
  );
};
