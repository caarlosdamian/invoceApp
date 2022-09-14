import React, { useCallback } from "react";
import { Checkbox } from "../checkbox/Checkbox";
import "./MiniBox.scss";

export const MiniBox = () => {
  const handleChanges = useCallback((value: any) => {
    console.log(value);
  }, []);

  return (
    <div className="mini-box__container">
      <Checkbox label="Draft" value="draft" onlClick={handleChanges} />
      <Checkbox label="Pending" value="pending" onlClick={handleChanges} />
      <Checkbox label="Paid" value="paid" onlClick={handleChanges} />
    </div>
  );
};
