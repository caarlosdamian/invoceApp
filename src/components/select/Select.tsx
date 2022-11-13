import React, { useState } from "react";
import { useSelector } from "react-redux";
import arrowDown from "../../assets/icon-arrow-down.svg";
import "./Select.scss";

export const Select = ({ dispatch }: any) => {
  const [active, setActive] = useState(false);
  const { dark } = useSelector((state: any) => state.theme);
  const items = [1, 7, 14, 30];
  return (
    <div className="select-container">
      <div className={`select-box ${dark}`} onClick={() => setActive(!active)}>
        <span className={`span-box ${dark}`}>Net 30 Days</span>
        <img src={arrowDown} alt="arrowDown" className="img-box" />
      </div>
      <div className={`list-container ${active && "active"} ${dark}`}>
        <ul className="list-wrapper">
          {items.map((item) => (
            <li
              key={item}
              className={`list-item ${dark}`}
              onClick={() => {
                dispatch({
                  payload: { type: "INVOICE_PAYMENT_TERM", event: item },
                });
                setActive(false);
              }}
            >
              Net {item} Day{item > 1 && "s"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
