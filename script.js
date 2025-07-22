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
  updateTodoList,
  editTodo,
} from './projectService.js';
import { projectText, todoDate, todoText } from './input.js';
//
const manager = projectManager();
//BTN SIDEBAR
domElements.btnNewProject.addEventListener('click', function () {
  domElements.sidebarForm.reset();
  domElements.sidebarFormBox.classList.remove('hidden');
});
domElements.btnCancelProject.addEventListener('click', function () {
  domElements.sidebarFormBox.classList.add('hidden');
});
//UL
domElements.sidebarUl.addEventListener('click', function (e) {
  if (e.target.closest('.icon-x')) {
    const li = e.target.closest('.sidebar-li-box');
    manager.removeProjectById(li.id);
    updateProjectList(manager.getProjects());
    domElements.mainUl.innerHTML = '';
  } else if (e.target.closest('.sidebar-li-box')) {
    const li = e.target.closest('.sidebar-li-box');
    manager.findProject(li.id);
    const selectedProject = manager.getSelectedProject();
    manager.setSelectProject(selectedProject);
    updateTodoList(selectedProject.getTodosArray());
  }
});
//UL-TODO
domElements.mainUl.addEventListener('click', function (e) {
  if (e.target.closest('.btn-edit')) {
    const selectedProject = manager.getSelectedProject();
    const li = e.target.closest('.li-box');
    const array = selectedProject.getTodosArray();
    const todo = array.find(todo => todo.getTodoId() === li.id);
    if (selectedProject.getEditing() === true) {
      return;
    }
    editTodo(todo, selectedProject.getTodosArray(), selectedProject);
  } else if (e.target.closest('.btn-delete')) {
    const selectedProject = manager.getSelectedProject();
    if (selectedProject.getEditing() === true) {
      return;
    }
    const li = e.target.closest('.li-box');
    selectedProject.deleteTodo(li.id);
    updateTodoList(selectedProject.getTodosArray());
  }
});
//BTN TODO
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
