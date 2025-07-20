'use strict';
import { domElements } from './dom.js';
import {
  projectManager,
  projectCreator,
  todoCreator,
} from './projectFactory.js';
import {
  addProject,
  updateProjectList,
  addTodo,
  updateTodosList,
} from './projectService.js';
import { projectText, todoDate, todoText } from './input.js';
//
const manager = projectManager();
let svaeSelectProject = '';
//BTN SIDEBAR
domElements.btnNewProject.addEventListener('click', function () {
  domElements.sidebarForm.reset();
  domElements.sidebarFormBox.classList.remove('hidden');
});
domElements.btnCancelProject.addEventListener('click', function () {
  domElements.sidebarFormBox.classList.add('hidden');
});
domElements.sidebarUl.addEventListener('click', function (e) {
  if (e.target.closest('.icon-x')) {
    const li = e.target.closest('.sidebar-li-box');
    manager.removeProjectById(li.id);
    updateProjectList(manager.getProjects());
  } else if (e.target.closest('.sidebar-li-box')) {
    const li = e.target.closest('.sidebar-li-box');
    manager.findProject(li.id);
    if (newTodo) {
      updateTodosList(manager.getSelectedProject());
    }
  }
});

domElements.btnNewTodo.addEventListener('click', function () {
  if (!manager.getSelectedProject()) {
    alert('You must create a project first!');
  } else {
    domElements.mainForm.reset();
    domElements.mainForm.classList.remove('hidden');
  }
});

domElements.btnCancelTodo.addEventListener('click', function () {
  domElements.mainForm.classList.add('hidden');
});
//FORM
domElements.sidebarForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const newProject = projectCreator(projectText);
  manager.pushProject(newProject);
  addProject(newProject.getId(), newProject.getText());
});
//Main form
domElements.mainForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const newTodo = todoCreator(todoText, todoDate);
  const selectedProject = manager.getSelectedProject();
  selectedProject.getTodosArray().push(newTodo);
  addTodo(newTodo.getTodoId(), newTodo.getTodoText(), newTodo.getTodoDate());
});
