import React from "react";
import "./Checkbox.scss";

interface Props {
  value: string;
  onlClick: (value:any) => void;
  label: string;
}
export const Checkbox = ({ onlClick, value, label }: Props) => {
  return (
    <label className="container" onClick={() => onlClick(value)}>
      <input type="checkbox" value={value} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};
