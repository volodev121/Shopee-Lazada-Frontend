import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const AuthLayout = lazy(() => import("../../layouts/AuthLayout/AuthLayout"));
const PageSignin = lazy(() => import("../../pages/Auth/Signin/Signin"));
const PageRegister = lazy(() => import("../../pages/Auth/Signup/Signup"));

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path={`/`} element={<AuthLayout />}>
        {/* <Route index element={<PageSignin />} /> */}
        <Route path={`signin`} element={<PageSignin />} />
        <Route path={`signup`} element={<PageRegister />} />
        <Route path="*" element={<Navigate to="/"></Navigate>} />
        <Route path="" element={<Navigate to="signin"></Navigate>} />
      </Route>
    </Routes>
  );
}
