import reposData from "../utils/mockData/reposData";

import { Plot3D } from "./Charts/Plot3D";
import { getLanguages, getRepos } from "../utils/calculations";
import { Columns3D } from "./Charts/Columns3D";
import { Doughnut2d } from "./Charts/Doughnut2d";
import { Bar3D } from "./Charts/Bar3D";
import { useEffect, useState } from "react";
import axios from "axios";
import preloader from '../assets/preloader.gif'
import { useGlobalContext } from "../context";
import { Repos as ReposType, User } from "../utils/types";

export const Repos = () => {

  const [isLoading, setIsLoading] = useState(false)

  const { user, repos, setRepos }: { user: User, repos: ReposType[], setRepos: React.Dispatch<React.SetStateAction<ReposType[]>> } = useGlobalContext()

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true)
        console.log(`https://api.github.com/users/${user.login}/repos?per_page=100`)
        const data = reposData;
        //const data = await axios(`https://api.github.com/users/${user.login}/repos?per_page=100`)// - API rate error
        setIsLoading(false)
        setRepos(data);
        return data
      }
      catch (e) {
        console.log(e)
        return e
      }
    }
    fetchRepos()
  }, [])

  if (isLoading) {
    return <section className="section">
      <section className="section-center pt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
        <img src={preloader} alt='loader' className="mt-10 items-center content-center" />
        <img src={preloader} alt='loader' className="mt-10 items-center content-center" />
      </section></section>
  }

  const languages = getLanguages(repos);
  const rep = getRepos(repos);
  const languagesStars = languages.map((val) => { return { label: val.label, value: val.stars } })
  const reposForks = rep.map((val) => { return { label: val.label, value: val.popular } })
  console.log(reposForks)
  return (
    <section className="section">
      <section className="section-center repos">
        <Plot3D languages={languages} />
        <Columns3D repos={rep} />
        <Doughnut2d languages={languagesStars} />
        <Bar3D repos={reposForks} />
      </section>
    </section>

  );
};
