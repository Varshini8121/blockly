import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { routeNamePath, routeNames } from "./data/routeUtils";

import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Projects } from "./pages/Projects/Projects";

function App() {
  // const isUserLoggediIn = isLoggedIn ? <Home /> : <Authentication />;
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn]);

  return (
    <Routes>
      <Route path={routeNamePath[routeNames.HOME]} element={<Home />}>
        <Route path={routeNamePath[routeNames.HOME]} element={<Projects />} />
        <Route
          path={routeNamePath[routeNames.PROJECTS]}
          element={<Dashboard />}
        />
        <Route path={"*"} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
