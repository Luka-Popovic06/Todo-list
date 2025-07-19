'use strict';
import { domElements } from './dom.js';
import { projectManager, projectCreator } from './projectFactory.js';
import { addProject, updateProjectList } from './projectService.js';
import { projectText } from './input.js';
//
const manager = projectManager();
//BTN
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
  }
});
//FORM
domElements.sidebarForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const newProject = projectCreator(projectText);
  manager.pushProject(newProject);
  addProject(newProject.getId(), newProject.getText());
});
