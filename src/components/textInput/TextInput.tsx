import React from "react";
import { useSelector } from "react-redux";
import "./TextInput.scss";

interface TextInputProps {
  placeholder: string;
  value: any;
  onChange: any;
  type?: string;
  name: string;
  id?: string;
  label: string;
  onBlur?:any;
  style?:any
}

export const TextInput = ({ ...props }: TextInputProps) => {
  const { dark } = useSelector((state: any) => state.theme);

  return (
    <label className={`input-label ${dark}`}>
      {props.label}
      <input className={`input-text ${dark}`} type="text" {...props} />
    </label>
  );
};
