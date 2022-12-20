import React from "react";
import { useSelector } from "react-redux";
import { buttonSizes, buttonThemes } from "../../types";
import "./Button.scss";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  theme: buttonThemes;
  size: buttonSizes;
  icon?: boolean;
  children?: React.ReactNode;
}

export const Button = ({ label, theme, size, icon, children , onClick }: ButtonProps) => {
  const { dark } = useSelector((state: any) => state.theme);

  return (
    <button onClick={onClick} className={`button__container ${theme} ${size} ${dark}`}>
      {icon ? children : label}
    </button>
  );
};

// How to use it in a component:
/* Single Theme with icon
<Button label="Delete" theme="default__icon" size="medium" icon={true}>
<svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7E88C3" fill-rule="nonzero"/></svg>
  <span className="button__label">Add New Item</span>
</Button>

Single Theme with no icon:
<Button label="Delete" theme="default__red" size="medium"/> */
