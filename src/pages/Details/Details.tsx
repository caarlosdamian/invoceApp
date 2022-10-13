import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import arrow_down from "../../assets/icon-arrow-down.svg";
import { Button } from "../../components";
import { Tip } from "../../components/tip/Tip";
import { useCapitalize } from "../../hooks/useCapitalize";
import { useFormatDate } from "../../hooks/useFormatDate";

import "./Details.scss";

export const Details = () => {
  const { state } = useLocation();
  const {
    paymentDue,
    clientName,
    id,
    createdAt,
    clientEmail,
    clientAddress,
    senderAddress,
    description,
  } = state.data;
  const { dark } = useSelector((state: any) => state.theme);
  const { data } = state;
  const { status } = data;
  const capitalLetter = useCapitalize(status);
  const dueDate = useFormatDate(paymentDue);
  const paymentDate = useFormatDate(createdAt);

  return (
    <div className="details__container">
      <Link to="/" className="details__container-top">
        <img src={arrow_down} alt="arrrow-left" className="arrow-left" />
        <span className="details__container-top-label">Go Back</span>
      </Link>
      <div className={`details__container-middle ${dark}`}>
        <div className="details__container-middle-left">
          <span className={`details__container-middle-span ${dark}`}>
            Status
          </span>
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
            <span className={`details__top-left-title ${dark}`}>
              <span className="strong">#</span>
              {id}
            </span>

            <span className={`details__top-left-subtitle ${dark}`}>
              {description}
            </span>
          </div>
          <div className="details__top-right">
            <span className={`details__top-right-title ${dark}`}>
              <span className={`details-span ${dark}`}>
                {senderAddress.street}
              </span>
              <span className={`details-span ${dark}`}>
                {senderAddress.city}
              </span>
              <span className={`details-span ${dark}`}>
                {senderAddress.postCode}
              </span>
              <span className={`details-span ${dark}`}>
                {senderAddress.country}
              </span>
            </span>
          </div>
          <div className="details__middle-left">
            <div className="details__middle-left-top">
              <span className={`details__middle-left-top-title ${dark}`}>
                Invoice Date
              </span>
              <span className={`details__middle-left-top-subtitle ${dark}`}>
                {paymentDate}
              </span>
            </div>
            <div className="details__middle-left-bottom">
              <span className={`details__middle-left-bottom-title ${dark}`}>
                Payment Due
              </span>
              <span className={`details__middle-left-bottom-subtitle ${dark}`}>
                {dueDate}
              </span>
            </div>
          </div>
          <div className="details__middle-middle">
            <span className={`details__middle-middle-title ${dark}`}>
              Bill To
            </span>
            <span className={`details__middle-middle-subtitle ${dark}`}>
              {clientName}
            </span>
            <div className={`details__middle-middle-text ${dark}`}>
              <span className={`details__middle-middle-span ${dark}`}>
                {clientAddress.street}
              </span>
              <span className={`details__middle-middle-span ${dark}`}>
                {clientAddress.city}
              </span>
              <span className={`details__middle-middle-span ${dark}`}>
                {clientAddress.postCode}
              </span>
              <span className={`details__middle-middle-span ${dark}`}>
                {clientAddress.country}
              </span>
            </div>
          </div>
          <div className="details__middle-right">
            <span className={`details__middle-right-title ${dark}`}>
              Sent to
            </span>
            <span className={`details__middle-right-subtitle ${dark}`}>
              {clientEmail}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
