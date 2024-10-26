import { items } from "../utils/infos";
import { Info } from "../utils/types";

export const UserInformations = () => {
  return (
    <section className="section ">
      <div className="section-center info">
        {items.map((val) => {
          return <Item key={val.id} {...val} />;
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
