import React from "react";
import { useSelector } from "react-redux";
import { Sidebar } from "./components/";
import "./App.scss";

const App = () => {
  const { dark } = useSelector((state: any) => state.theme);
  return (
    <main className={`main__container ${dark}`} data-testid="main__container">
      <Sidebar />
    </main>
  );
};

export default App;
