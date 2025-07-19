export function projectManager() {
  let projects = [];
  const pushProject = project => projects.push(project);
  const getProjects = () => projects;
  function removeProjectById(id) {
    projects = projects.filter(p => p.getId() !== id);
  }
  return { pushProject, getProjects, removeProjectById };
}
export function projectCreator(projectText) {
  let id = crypto.randomUUID();
  let text = projectText;
  //
  const getId = () => id;
  const getText = () => text;
  return {
    getId,
    getText,
  };
}
