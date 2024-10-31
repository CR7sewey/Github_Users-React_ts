import React from "react";
import { Dashboard } from "./Dashboard";
import { PrivateRoute } from "./PrivateRoute";

export const LandingPage = () => {
  return (
    <main>
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    </main>
  );
};
