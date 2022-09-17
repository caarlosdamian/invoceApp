import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import arrow_down from "../../assets/icon-arrow-down.svg";
import plus from "../../assets/icon-plus.svg";
import { MiniBox, Row } from "../../components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { RowInfo } from "../../interfaces";
import {
  selectPostsByUser,
  showFilterToggle,
} from "../../redux/slices/InvoceSlice";

import "./Invoces.scss";

export const Invoces = () => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const { theme, invoice } = useSelector((state: any) => state);
  const { invoces, selectedFilter, showFilter } = invoice;
  const { dark } = theme;
  const invoceLength = selectPostsByUser(invoces);

  const filterInvoces = useMemo(
    () =>
      selectedFilter.length !== 0
        ? invoice.invoces.filter(function (x: any) {
            return selectedFilter?.reduce(function (y: any, z: any) {
              return x.status === y || x.status === z || y === true;
            }, "");
          })
        : invoces,

    [selectedFilter, invoces,invoice.invoces]
  );

  return (
    <div className="invoces">
      {showFilter && <MiniBox /> }
      
      <div className="invoces__container">
        <div className="invoces__container--top--left">
          <h1 className={`invoces__container--top--header ${dark}`}>
            Invoices
          </h1>
          <span className={`invoces__container--top--subtitle ${dark}`}>
            {width <= 430
              ? `${invoceLength} Invoices`
              : `There are ${invoceLength} pending invoices`}
          </span>
        </div>
        <div className="invoces__container--middle">
          <span
            className={`invoces__container--middle-text ${dark}`}
            onClick={() => dispatch(showFilterToggle())}
          >
            {width <= 430 ? "Filter" : "Filter by status"}
          </span>
          <img
            onClick={() => dispatch(showFilterToggle())}
            src={arrow_down}
            alt={arrow_down}
            className={`invoces__container--middle-img ${
              showFilter ? "open" : ""
            }`}
          />
        </div>
        <div className="invoces__container--top--right">
          <div className="invoce__container--top--right--img--container">
            <img
              src={plus}
              alt={plus}
              className="invoces__container--top--right--img"
            />
          </div>
          <button className="invoces__container--top--button">
            {width <= 430 ? "New" : "New Invoice"}
          </button>
        </div>
      </div>
      <div className="invoces__container-row">
        {filterInvoces?.map((invoce: RowInfo) => (
          <Row key={invoce.id} {...invoce} />
        ))}
      </div>
    </div>
  );
};
