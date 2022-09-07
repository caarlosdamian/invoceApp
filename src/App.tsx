import React from "react";
import { useSelector } from "react-redux";
import { Sidebar } from "./components/";
import "./App.scss";
import { Invoces } from "./pages/invoces/Invoces";

const App = () => {
  const { dark } = useSelector((state: any) => state.theme);
  return (
    <main className={`main__container ${dark}`} data-testid="main__container">
      <Sidebar />
      <div className="main__content">
        <Invoces/>
      </div>
    </main>
  );
};

export default App;
