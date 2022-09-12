/* eslint-disable react-hooks/exhaustive-deps*/

import React, { useCallback, useMemo } from "react";

import { Tip } from "../tip/Tip";
import arrow_down from "../../assets/icon-arrow-down.svg";
import { RowInfo } from "../../interfaces";
import "./Row.scss";

export const Row = (props: RowInfo) => {
  const { id, clientName, status, paymentDue, total } = props;

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

  const dueDate = useMemo(() => {
    const date = new Date(paymentDue);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }, [paymentDue]);

  return (
    <div className="row__container">
      <span className="row__container-id">
        <strong className="row__id-strong">#</strong> {id}
      </span>
      <span className="row__container-date">Due {dueDate}</span>
      <span className="row__container-name">{clientName}</span>
      <span className="row__container-amount">
        £ {GBPFormatter.format(total)}
      </span>
      <div className="arrow__container">
        <Tip type={status} label={capitalize(status)} />
        <img src={arrow_down} alt="arrow_down" className="arrow-left" />
      </div>
    </div>
  );
};
