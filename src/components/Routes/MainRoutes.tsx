import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "../../pages/404Page";

const AppLayout = lazy(() => import("../../layouts/AppLayout/AppLayout"));
const PageDashboard = lazy(() => import("../../pages/Dashboard/Dashboard"));

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path={`/`} element={<AppLayout />}>
        <Route path={""} element={<PageDashboard />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AuthenticatedRoutes;
