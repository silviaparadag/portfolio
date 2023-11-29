//projects-portfolio;
import dataJson from '../services/db.json';

const getProjectsFromApi = async () => {
  const response = await fetch(
    'https://silviaparadag.github.io/api-sp/projects-portfolio/projects.json'
  );
  return await response.json();
};

const getJobsFromApi = async () => {
  const response = await fetch(
    'https://silviaparadag.github.io/api-sp/projects-portfolio/jobs.json'
  );
  return await response.json();
};

const getEducationFromApi = async () => {
  const response = await fetch(
    'https://silviaparadag.github.io/api-sp/projects-portfolio/education.json'
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
  getJobsFromApi: getJobsFromApi,
  getEducationFromApi: getEducationFromApi,
};

export default objToExport;
