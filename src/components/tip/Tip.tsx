import React from "react";
import { useSelector } from "react-redux";
import "./Tip.scss";

interface TipProps {
  label: "Pending" | "Paid" | "Draft";
  type: "pending" | "paid" | "draft";
}
export const Tip = ({ label, type }: TipProps) => {
  const { dark } = useSelector((state: any) => state.theme);

  return (
    <div className={`tip__container ${type} ${dark}`}>
      <div className={`tip__circle ${type} ${dark}`}></div>
      <span className={`tip__label ${type} ${dark}`}>{label}</span>
    </div>
  );
};

