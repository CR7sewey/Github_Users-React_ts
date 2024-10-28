import { useGlobalContext } from "../context";
import { items } from "../utils/infos";
import { Info } from "../utils/types";

export const UserInformations = () => {
  const { user, repos } = useGlobalContext()
  const values = { repos: user.public_repos, followers: user.followers, following: user.following, gifts: user.public_gists }
  return (
    <section className="section ">
      <div className="section-center info">
        {items.map((val) => {
          const newVal = { ...val, value: values[val.label] }
          return <Item key={val.id} {...newVal} />;
        })}
      </div>
    </section>
  );
};

export const Item = ({ label, icon, color, value }: Info) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3 className="text-gray-950 font-bold text-4xl">{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};
