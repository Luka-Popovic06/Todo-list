export function projectManager() {
  let projects = [];
  let selectedProject;
  const pushProject = project => projects.push(project);
  const getProjects = () => projects;
  function removeProjectById(id) {
    projects = projects.filter(p => p.getId() !== id);
  }
  function findProject(id) {
    const project = projects.find(p => p.getId() === id);
    selectedProject = project;
  }

  const getSelectedProject = () => selectedProject;

  return {
    pushProject,
    getProjects,
    removeProjectById,
    findProject,
    getSelectedProject,
  };
}
export function projectCreator(projectText) {
  let id = crypto.randomUUID();
  let text = projectText;
  let todosArray = [];
  //
  const getId = () => id;
  const getText = () => text;
  const getTodosArray = () => todosArray;
  return {
    getId,
    getText,
    getTodosArray,
  };
}
export function todoCreator(todoText, todoDate) {
  let id = crypto.randomUUID();
  let text = todoText;
  let date = todoDate;
  const getTodoId = () => id;
  const getTodoText = () => text;
  const getTodoDate = () => date;
  return {
    getTodoId,
    getTodoDate,
    getTodoText,
  };
}
