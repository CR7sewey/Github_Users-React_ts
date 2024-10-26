import React from "react";
import { NavSearch } from "../components/NavSearch";
import { UserInformations } from "../components/UserInformations";
import { User } from "../components/User";

export const Dashboard = () => {
  return (
    <main>
      <div>
        <NavSearch />
        <UserInformations />
        <User />
      </div>
    </main>
  );
};
