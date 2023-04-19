import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const AppLayout = lazy(() => import("../../layouts/AppLayout/AppLayout"));
const PageDashboard = lazy(() => import("../../pages/Dashboard/Dashboard"));

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path={`/`} element={<AppLayout />}>
        <Route path={""} element={<PageDashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AuthenticatedRoutes;
