import React from "react";
import { useSelector } from "react-redux";
import { Sidebar,Modal,Form } from "./components/";
import { CustomRoutes } from "./routes/CustomRoutes";
import "./App.scss";
import { showModal } from "./redux/slices/ModalSlice";

const App = () => {
  const {
    theme: { dark },
    modal,
  } = useSelector((state: any) => state);
  const show = showModal(modal);
  return (
    <main className={`main__container ${dark}`} data-testid="main__container">
      {show && (
        <Modal>
          <Form />
        </Modal>
      )}
      <Sidebar />
      <div className="main__content">
        <CustomRoutes />
      </div>
    </main>
  );
};

export default App;
