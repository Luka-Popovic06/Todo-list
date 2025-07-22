export function projectManager() {
  let projects = [];
  let selectedProject;

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
export function projectCreator(projectText) {
  let id = crypto.randomUUID();
  let text = projectText;
  let todosArray = [];
  let editing = false;
  function deleteTodo(id) {
    todosArray = todosArray.filter(todo => todo.getTodoId() !== id);
  }
  const setEditing = value => (editing = value);
  const setTodosArray = newArray => (todosArray = newArray);
  const getEditing = () => editing;
  //
  const getId = () => id;
  const getText = () => text;
  const getTodosArray = () => todosArray;
  return {
    setEditing,
    getEditing,
    getId,
    getText,
    getTodosArray,
    setTodosArray,
    deleteTodo,
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
