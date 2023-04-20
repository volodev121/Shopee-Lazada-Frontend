import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import CirclesLoader from "./components/CirclesLoader/CirclesLoader";
import { useAppSelector } from "./hooks";
import AuthenticatedRoutes from "./components/Routes/MainRoutes";
import AuthRoutes from "./components/Routes/AuthRoutes";

const App = () => {
  const isAuthenticated = useAppSelector((store) => store.auth.isAuthenticated);

  return (
    <Router>
      <Suspense fallback={<CirclesLoader />}>
        {!isAuthenticated && <AuthenticatedRoutes></AuthenticatedRoutes>}
        {isAuthenticated && <AuthRoutes></AuthRoutes>}
      </Suspense>
    </Router>
  );
};

export default App;
