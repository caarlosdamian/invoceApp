import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/slices/ModalSlice";
import "./Modal.scss";

interface ModalProps {
  children: JSX.Element;
  type?: string;
}

export const Modal = ({ type, children }: ModalProps) => {
  const dispatch = useDispatch();
  const { dark } = useSelector((state: any) => state.theme);

  return (
    <div className={`modal-container ${type}`}>
      <div className={`modal-form ${type} ${dark}`}>{children}</div>
      <div className="overlay" onClick={() => dispatch(toggleModal())}></div>
    </div>
  );
};
