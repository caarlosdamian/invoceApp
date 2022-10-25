import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slices/ModalSlice";
import "./Modal.scss";

interface ModalProps {
  children: JSX.Element;
  type?: string ;
}

export const Modal = ({ type, children }: ModalProps) => {
  const dispatch = useDispatch();
  return (
    <div className={`modal-container ${type}`}>
      <div className={`modal-form ${type}`}>{children}</div>
      <div className="overlay" onClick={() => dispatch(toggleModal())}></div>
    </div>
  );
};
