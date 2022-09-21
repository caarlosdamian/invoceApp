import React from "react";
import { Route,Routes } from "react-router-dom";
import { Details } from "../pages/Details/Details";
import { Invoces } from "../pages/invoces/Invoces";

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Invoces />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  );
};
