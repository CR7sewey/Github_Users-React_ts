import React from "react";
import { NavSearch } from "../components/NavSearch";
import { UserInformations } from "../components/UserInformations";

export const Dashboard = () => {
  return (
    <main>
      <div>
        <NavSearch />
        <UserInformations />
      </div>
    </main>
  );
};
