import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Button, Table, Tip } from "../../components";
import { useCapitalize, useFormatDate, useWindowSize } from "../../hooks/index";
import arrow_down from "../../assets/icon-arrow-down.svg";
import { setEditInvoce } from "../../redux/slices/InvoceSlice";

import "./Details.scss";
import { toggleModal } from "../../redux/slices/ModalSlice";

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
    items,
    total,
  } = state.data;
  const {
    theme: { dark },
  } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const { data } = state;
  const { status } = data;
  const { width } = useWindowSize();
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

        {width >= 600 && (
          <div className="details__container-middle-right">
            <Button
              size="medium"
              theme="default__light"
              label="Edit"
              onClick={() => {
                dispatch(setEditInvoce(data));
                dispatch(toggleModal());
              }}
            />
            <Button size="medium" theme="default__red" label="Delete" />
            <Button
              size="medium"
              theme="default__purple"
              label="Mark as Paid"
            />
          </div>
        )}
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
        <Table items={items} />
        <div className={`details__table-container-total ${dark}`}>
          <span className="details__table-total-label">Amount Due</span>
          <span className="details__table-total-amount"> {`£ ${total}`}</span>
        </div>
      </div>

      {width <= 450 && (
        <div className={`details__container-middle ${dark}`}>
          <div className="details__container-middle-right">
            <Button
              size="small"
              theme="default__light"
              label="Edit"
              onClick={() => {
                dispatch(setEditInvoce(data));
                dispatch(toggleModal());
              }}
            />
            <Button size="small" theme="default__red" label="Delete" />
            <Button size="small" theme="default__purple" label="Mark as Paid" />
          </div>
        </div>
      )}
    </div>
  );
};
