import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.svg";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import avatar from "../../assets/image-avatar.jpg";
import "./Sidebar.scss";
import { toogleTheme } from "../../redux/slices/ThemeSlice";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { dark } = useSelector((state: any) => state.theme);

  return (
    <div className={`sidebar__container ${dark}`}>
      <div className="sidebar__container--top">
        <img src={logo} alt="logo" className="sidebar__container--top--logo" />
        <div className="sidebar__container--top--absolute"></div>
      </div>
      <div className="sidebar__container--bottom">
        <div className="sidebar__container--bottom--top">
          <img
            onClick={() => dispatch(toogleTheme())}
            src={dark === "dark" ? moon : sun}
            alt={dark === "dark" ? moon : sun}
            className="sidebar__container--bottom--theme"
          />
        </div>
        <hr className="sidebar__container--line" />
        <div className="sidebar__container--bottom--bottom">
          <img
            src={avatar}
            alt={avatar}
            className="sidebar__container--bottom--profile"
          />
        </div>
      </div>
    </div>
  );
};
