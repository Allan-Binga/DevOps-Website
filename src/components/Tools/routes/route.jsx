import React from "react";
import { Route, Routes } from "react-router-dom";
import ToolDetails from "../ToolDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/tools/:id" element={<ToolDetails />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
