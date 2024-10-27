import React from "react";
import { NavSearch } from "../components/NavSearch";
import { UserInformations } from "../components/UserInformations";
import { User } from "../components/User";
import { Followers } from "../components/Followers";
import { Repos } from "../components/Repos";

export const Dashboard = () => {
  return (
    <main>
      <div>
        <NavSearch />
        <UserInformations />
        <section className="section">
          <section className="section-center pt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
            <User />
            <Followers />
          </section>
        </section>
        <Repos />
      </div>
    </main>
  );
};
