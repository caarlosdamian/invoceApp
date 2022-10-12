import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import arrow_down from "../../assets/icon-arrow-down.svg";
import { Button } from "../../components";
import { Tip } from "../../components/tip/Tip";
import { useCapitalize } from "../../hooks/useCapitalize";

import "./Details.scss";

export const Details = () => {
  const { state } = useLocation();
  const { dark } = useSelector((state: any) => state.theme);
  const { data } = state;
  const { status } = data;
  const capitalLetter = useCapitalize(status);

  return (
    <div className="details__container">
      <Link to="/" className="details__container-top">
        <img src={arrow_down} alt="arrrow-left" className="arrow-left" />
        <span className="details__container-top-label">Go Back</span>
      </Link>
      <div className={`details__container-middle ${dark}`}>
        <div className="details__container-middle-left">
          <span className="details__container-middle-span">Status</span>
          <Tip type={status} label={capitalLetter} />
        </div>
        <div className="details__container-middle-right">
          <Button size="medium" theme="default__light" label="Edit" />
          <Button size="medium" theme="default__red" label="Delete" />
          <Button size="medium" theme="default__purple" label="Mark as Paid" />
        </div>
      </div>
      <div className={`details__container-main ${dark}`}>
        <div className="details__container-main-grid">
          <div className="details__top-left">
            <span className="details__top-left-title">
              <span className="strong">#</span>XM9141
            </span>

            <span className="details__top-left-subtitle">Graphic Design</span>
          </div>
          <div className="details__top-right">
            <span className="details__top-right-title">
              19 Union Terrace London E1 3EZ United Kingdom
            </span>
          </div>
          <div className="details__middle-left">
            <div className="details__middle-left-top">
              <span className="details__middle-left-top-title">
                Invoice Date
              </span>
              <span className="details__middle-left-top-subtitle">
                21 Aug 2021
              </span>
            </div>
            <div className="details__middle-left-bottom">
              <span className="details__middle-left-bottom-title">
                Invoice Date
              </span>
              <span className="details__middle-left-bottom-subtitle">
                21 Aug 2021
              </span>
            </div>
          </div>
          <div className="details__middle-middle">
            <span className="details__middle-middle-title">Bill To</span>
            <span className="details__middle-middle-subtitle">Alex Grim</span>
            <span className="details__middle-middle-text">
              84 Church Way Bradford BD1 9PB United Kingdom
            </span>
          </div>
          <div className="details__middle-right">
            <span className="details__middle-right-title">Sent to</span>
            <span className="details__middle-right-subtitle">
              alexgrim@mail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
