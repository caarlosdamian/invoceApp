import React from "react";
import { useSelector } from "react-redux";
import EmptyImg from "../../assets/illustration-empty.svg";
import "./Empty.scss";

export const Empty = () => {
  const { dark } = useSelector((state: any) => state.theme);
  return (
    <div className="empty-container">
      <img src={EmptyImg} alt="EmptyImg" className="empty-img" />
      <h1 className={`empty-title ${dark}`}>There is nothing here</h1>
      <div className="empty__bottom-container">
        <span className={`title-empty__bottom-container ${dark}`}>
          Create an invoice by clicking the
        </span>
        <span className={`subtitle-empty__bottom-container ${dark}`}>
          <strong>New Invoice</strong> button and get started
        </span>
      </div>
    </div>
  );
};
