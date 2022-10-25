import React from "react";
import "./TextInput.scss";

interface TextInputProps {
  placeholder: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name: string;
  id?: string;
  label: string;
}

export const TextInput = ({ ...props }: TextInputProps) => {
  return (
    <label className="input-label">
      {props.label}
      <input className="input-text" type="text" {...props} />
    </label>
  );
};
