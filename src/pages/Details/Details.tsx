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
          <div className="details__top-left">Test</div>
          <div className="details__top-right">test</div>
          <div className="details__middle-left">test</div>
          <div className="details__middle-middle">test</div>
          <div className="details__middle-right">test</div>
        </div>
      </div>
    </div>
  );
};
