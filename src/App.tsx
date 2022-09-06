import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";

const App = () => {
  const { dark } = useSelector((state: any) => state.theme);
  return (
    <main
      className={`main__container ${dark}`}
      data-testid="main__container"
    ></main>
  );
};

export default App;
