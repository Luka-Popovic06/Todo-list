export function projectManager() {
  let projects = [];
  let selectedProject;
  //let newTodoesArray;
  const setSelectProject = project => (selectedProject = project);
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
    setSelectProject,
  };
}

export function todoCreator(todoText, todoDate) {
  let id = crypto.randomUUID();
  let text = todoText;
  let date = todoDate;

  const setTodoText = newText => (text = newText);
  const setTodoDate = newDate => (date = newDate);
  const getTodoId = () => id;
  const getTodoText = () => text;
  const getTodoDate = () => date;
  return {
    getTodoId,
    getTodoDate,
    getTodoText,
    setTodoText,
    setTodoDate,
  };
}
