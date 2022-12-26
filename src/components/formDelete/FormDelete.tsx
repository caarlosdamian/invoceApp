import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteInvoce, setEditInvoce } from "../../redux/slices/InvoceSlice";
import { toggleModal } from "../../redux/slices/ModalSlice";
import { RootState } from "../../redux/store";
import { Button } from "../button/Button";
import "./FormDelete.scss";

export const FormDelete = () => {
  const { editInvoce } = useSelector((state: RootState) => state.invoice);
  const { dark } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = editInvoce;
  return (
    <div className="modal-delete-container">
      <h1 className={`modal-delete-header ${dark}`}>Confirm Deletion</h1>
      <span className="modal-delete-header-subtitle">
        Are you sure you want to delete invoice #{id}? This action cannot be
        undone.
      </span>
      <div className="modal-delete-button-container">
        <Button
          size="medium"
          theme="default__light"
          label="Cancel"
          onClick={() => {
            dispatch(setEditInvoce({}));
            dispatch(toggleModal());
          }}
        />
        <Button
          size="medium"
          theme="default__red"
          onClick={() => {
            dispatch(deleteInvoce(id));
            navigate("/");
            dispatch(toggleModal());
          }}
          label="Delete"
        />
      </div>
    </div>
  );
};
