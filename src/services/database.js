//projects-portfolio;
import dataJson from '../services/db.json';

const getProjectsFromApi = async () => {
  const response = await fetch(
    'https://silviaparadag.github.io/api-sp/projects-portfolio/projects.json'
  );
  return await response.json();
};

const getDataFromJson = async () => {
  const response = await fetch(dataJson);
  return await response.json();
};

const objToExport = {
  getDataFromJson: getDataFromJson,
  getProjectsFromApi: getProjectsFromApi,
};

export default objToExport;
