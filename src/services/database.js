//projects-portfolio;

const getProjectsFromApi = () => {
  return fetch(
    'https://silviaparadag.github.io/api-sp/projects-portfolio/projects.json'
  ).then((response) => response.json());
};

export default getProjectsFromApi;
