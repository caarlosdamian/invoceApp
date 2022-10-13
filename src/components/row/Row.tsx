/* eslint-disable react-hooks/exhaustive-deps*/

import React, { useCallback, useMemo } from "react";

import { Tip } from "../tip/Tip";
import arrow_down from "../../assets/icon-arrow-down.svg";
import { RowInfo } from "../../interfaces";
import "./Row.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFormatDate } from "../../hooks/useFormatDate";

export const Row = (props: RowInfo) => {
  const { id, clientName, status, paymentDue, total } = props;
  const dueDate = useFormatDate(paymentDue);

  const { dark } = useSelector((state: any) => state.theme);

  const GBPFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
    [props]
  );

  const capitalize = useCallback(
    (string: string) => {
      return string.trim().replace(/^\w/, (c) => c.toUpperCase());
    },
    [status]
  );
  return (
    <Link
      to={`/${id}`}
      state={{ data: props }}
      className={`row__container ${dark}`}
    >
      <span className={`row__container-id ${dark}`}>
        <strong className="row__id-strong">#</strong> {id}
      </span>
      <span className={`row__container-date ${dark}`}>Due {dueDate}</span>
      <span className={`row__container-name ${dark}`}>{clientName}</span>
      <span className={`row__container-amount ${dark}`}>
        £ {GBPFormatter.format(total)}
      </span>
      <div className="arrow__container">
        <Tip type={status} label={capitalize(status)} />
        <img src={arrow_down} alt="arrow_down" className="arrow-left" />
      </div>
    </Link>
  );
};
