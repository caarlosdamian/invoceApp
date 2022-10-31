import { useCallback, useEffect, useState } from "react";

export const useDatePicker = () => {
  const [date] = useState(new Date());
  const [month, setMonth] = useState(date?.getMonth());
  const [year, setYear] = useState(date?.getFullYear());
  const [day] = useState(date?.getDate());
  const [days, setDays] = useState<any>([]);
  const [daysGray, setDaysGray] = useState<any>([]);

  const getDays = useCallback(() => {
    let daysOnMont = 31;
    let daysOnMontGray = 5;
    setDays([]);
    setDaysGray([]);
    if (month === 1) {
      daysOnMont = year % 4 === 0 ? 29 : 28;
      daysOnMontGray = year % 4 === 0 ? 6 : 7;
    }
    if (month === 3 || month === 5 || month === 8 || month === 10) {
      daysOnMont = 30;
      daysOnMontGray = 4;
    }

    for (let i = 1; i <= daysOnMont; i++) {
      setDays((prev: any) => [...prev, i]);
    }

    for (let i = 1; i <= daysOnMontGray; i++) {
      setDaysGray((prev: any) => [...prev, i]);
    }
  }, [month, year]);

  useEffect(() => {
    getDays();
  }, [month, year,getDays]);

  const gotoNextMonth = () => {
    setMonth(month + 1);
    if (month + 1 > 11) {
      setMonth((prev) => 0);
      setYear((prev) => prev + 1);
    }
  };
  const gotoPrevMonth = () => {
    setMonth((prev) => prev - 1);
    if (month - 1 < 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    }
  };

  return {
    day,
    month,
    year,
    gotoNextMonth,
    gotoPrevMonth,
    getDays,
    days,
    daysGray,
  };
};
