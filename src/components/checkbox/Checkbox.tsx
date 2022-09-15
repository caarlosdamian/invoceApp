import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByStatus, removeFilter } from "../../redux/slices/InvoceSlice";
import "./Checkbox.scss";

interface Props {
  value: string;
  label: string;
}
export const Checkbox = ({ value, label }: Props) => {

  const dispatch = useDispatch();
  const { selectedFilter } = useSelector((state: any) => state.invoice);

  const handleToggleFilter = useCallback(
    (ev: any, filtro: any) => {
      ev.stopPropagation();
      if (selectedFilter.indexOf(filtro) !== -1) {
        dispatch(removeFilter(filtro));
      } else {
        dispatch(filterByStatus(filtro));
      }
    },
    [selectedFilter,dispatch]
  );
  
  return (
    <label className="container">
      <input
        type="checkbox"
        value={value}
        onClick={(e) => handleToggleFilter(e, value)}
      />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};
