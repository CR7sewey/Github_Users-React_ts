import React, { useState } from "react";
import followersData from "../utils/mockData/followersData";

export const Followers = () => {
  const [followers, setFollowers] = useState(followersData);

  return (
    <div className="followers">
      {followers.map((follower) => {
        return (
          <article key={follower.id}>
            <img src={follower.avatar_url} alt={follower.login} />
            <div>
              <h4 className="font-bold">{follower.login}</h4>
              <a href={follower.html_url}>{follower.html_url}</a>
            </div>
          </article>
        );
      })}
    </div>
  );
};
