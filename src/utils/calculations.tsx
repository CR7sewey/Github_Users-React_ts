
export const getLanguages = (reposData): Array<{ label: string, value: string, stars: string }> => {
    let languages: Array<{ label: string, value: string, stars: string }> = [];
    let inicialState = [...languages];

    languages = reposData.reduce((acc, values, index) => {
        if (index > 0) {
            const existsL = acc.find((obj) => obj.label === values.language);

            if (existsL) {
                const newL = acc.map((obj) => {
                    if (obj.label === values.language) {
                        obj.value = (Number(obj.value) + 1).toString()
                        obj.stars = (Number(obj.stars) + values.stargazers_count).toString()
                    }
                    return obj;
                })
                acc = [...newL]
                return acc;
            }
        }
        if (!values.language) {
            return acc;
        }
        acc.push({ label: values.language || 'null', value: '1', stars: values.stargazers_count })
        return acc;

    }, inicialState)

    console.log(languages, 'aqui')


    /*
        reposData.forEach((values, index: number) => {
            const existsL = languages.find((obj) => obj.label === values.language);
            if (index > 0 && existsL) {
                const newL = languages.map((obj) => {
                    if (obj.label === values.language) {
                        obj.value = (Number(obj.value) + 1).toString()
                    }
                    return obj;
                })
                languages = [...newL]
                return;
            }
            if (!values.language) {
                return;
            }
            languages.push({ label: values.language || 'null', value: '1' })
            return;
        });*/
    console.log(languages)
    return languages;
}

export const getRepos = (reposData): Array<{ label: string, value: string, popular: string }> => {
    // stargazers_count
    const repos = reposData.map((val) => {
        return { label: val.name, value: val.stargazers_count.toString(), popular: val.forks_count.toString() }
    })

    repos.sort((a, b) => { return b.value - a.value })



    console.log(repos, 'aqui')
    return repos
}