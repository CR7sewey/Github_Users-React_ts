import { useState } from "react";
import mockUser from "../utils/mockData/userData";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

export const User = () => {
  const [user, setUser] = useState(mockUser);
  console.log(user);
  return (
    <section className="section">
      <section className="section-center pt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
        <article className="card">
          <header>
            <img
              src={user.avatar_url}
              alt={user.name}
              className="hover:w-32 hover:h-32"
            />
            <div>
              <h4 className="font-bold">{user.name}</h4>
              <p>@{user.twitter_username || "miguel"}</p>
            </div>
            <a href={user.html_url}>Follow</a>
          </header>
          <p className="bio mb-5">{user.bio}</p>
          <div className="links">
            <p>
              <MdBusiness /> {user.company || "No Company"}
            </p>
            <p>
              <MdLocationOn />
              {user.location || "Earth"}
            </p>
            <a href={`https://${user.blog}`}>
              <MdLink />
              {user.blog || "No blog"}
            </a>
          </div>
        </article>
      </section>
    </section>
  );
};
