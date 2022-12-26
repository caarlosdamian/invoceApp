import React from "react";
import { useSelector } from "react-redux";
import { Sidebar, Modal, Form } from "./components/";
import { CustomRoutes } from "./routes/CustomRoutes";
import "./App.scss";
import { showModal } from "./redux/slices/ModalSlice";
import { FormDelete } from "./components/formDelete/FormDelete";
import { FormMobile } from "./components/formMobile/FormMobile";
// Pending move to components index

const App = () => {
  const {
    theme: { dark },
    modal: { type },
    modal,
  } = useSelector((state: any) => state);
  const show = showModal(modal);
  return (
    <main className={`main__container ${dark}`} data-testid="main__container">
      {show && type === "form" ? (
        <Modal>
          <Form />
        </Modal>
      ) : show && type === "delete" ? (
        <Modal>
          <FormDelete />
        </Modal>
      ) : (
        show &&
        type === "form-mobile" && (
          <Modal>
            <FormMobile />
          </Modal>
        )
      )}
      <Sidebar />
      <div className="main__content">
        <CustomRoutes />
      </div>
    </main>
  );
};

export default App;
