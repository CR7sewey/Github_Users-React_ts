import reposData from "../utils/mockData/reposData";

import { Plot3D } from "./Charts/Plot3D";
import { getLanguages, getRepos } from "../utils/calculations";
import { Columns3D } from "./Charts/Columns3D";
import { Doughnut2d } from "./Charts/Doughnut2d";
import { Bar3D } from "./Charts/Bar3D";

export const Repos = () => {
  const languages = getLanguages(reposData);
  const repos = getRepos(reposData);


  return (
    <section className="section">
      <section className="section-center repos">
        <Plot3D languages={languages} />
        <Columns3D repos={repos} />
        <Doughnut2d />
        <Bar3D />
      </section>
    </section>

  );
};
