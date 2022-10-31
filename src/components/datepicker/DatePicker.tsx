import React, { useMemo, useState } from "react";
import { useDatePicker } from "../../hooks/useDatePicker";
import { months } from "../../utils";
import "./DatePicker.scss";

export const DatePicker = ({ dispatch }: any) => {
  const { month, year, day, gotoNextMonth, gotoPrevMonth, days, daysGray } =
    useDatePicker();
  const [active, setActive] = useState(false);

  const [selectectDay, setSelectectDay] = useState<any>(day);
  const [selectectMonth, setSelectectMonth] = useState<any>(months[month]);
  const [selectectYear, setSelectectYear] = useState<any>(year);
  const [selectedDateValue, setselectedDateValue] = useState<any>(
    `${selectectDay} ${selectectMonth} ${selectectYear}`
  );

  const selectedDate = (d: any, next?: boolean) => {
    if (next) {
      gotoNextMonth();
      setselectedDateValue(
        `${d}  ${months[month + 1 === 12 ? 0 : month + 1]} ${year}`
      );
      setSelectectYear(year);
      setSelectectMonth(months[month]);
      dispatch({
        payload: {
          type: "INVOICE_DATE_CHANGE",
          event: year + "-" + (month + 1) + "-" + d,
        },
      });
      setSelectectDay(d);
      setActive(false);
    } else {
      setselectedDateValue(`${d}  ${months[month]} ${year}`);
      setSelectectYear(year);
      setSelectectMonth(months[month]);
      dispatch({
        payload: {
          type: "INVOICE_DATE_CHANGE",
          event: year + "-" + (month + 1) + "-" + d,
        },
      });
      setSelectectDay(d);
      setActive(false);
    }
  };

  const selectedElement = useMemo(
    () => selectedDateValue.substring(0, 7).replace(/\s/g, ""),
    [selectedDateValue]
  );
  return (
    <div className="date-picker">
      <div className="selected-date" onClick={() => setActive(!active)}>
        <span>{selectedDateValue}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3334 2H14C15.1027 2 16 2.89734 16 4V14C16 15.1027 15.1027 16 14 16H2C0.897339 16 0 15.1027 0 14V4C0 2.89734 0.897339 2 2 2H2.66663V0.666626C2.66663 0.298706 2.96533 0 3.33337 0H4C4.36804 0 4.66663 0.298706 4.66663 0.666626V2H11.3334V0.666626C11.3334 0.298706 11.632 0 12 0H12.6666C13.0347 0 13.3334 0.298706 13.3334 0.666626V2ZM14 14.6666C14.3673 14.6666 14.6666 14.3673 14.6666 14V6.69336H1.33337V14C1.33337 14.3673 1.63269 14.6666 2 14.6666H14Z"
            fill="#7E88C3"
          />
        </svg>
      </div>
      <div className={`dates ${active && "active"}`}>
        <div className="month">
          <div onClick={gotoPrevMonth} className="arrows prev-mont">
            &lt;
          </div>
          <div className="mth">{`${months[month]} ${year}`}</div>
          <div onClick={gotoNextMonth} className="arrows next-mont">
            &gt;
          </div>
        </div>
        <div className="days">
          {days?.map((item: any) => (
            <span
              key={item}
              className={`day ${
                selectedElement === `${item}${months[month]}` && "selected"
              }`}
              onClick={() => selectedDate(item)}
            >
              {item}
            </span>
          ))}
          {daysGray?.map((item: any) => (
            <span
              key={`${item}a`}
              className={`day next-month`}
              onClick={() => selectedDate(item, true)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
