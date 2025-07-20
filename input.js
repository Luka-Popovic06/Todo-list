import { domElements } from './dom.js';
export let projectText;
export let todoText;
export let todoDate;
domElements.sidebarInput.addEventListener('input', function (e) {
  projectText = e.target.value;
});
domElements.mainInputText.addEventListener('input', function (e) {
  todoText = e.target.value;
});
domElements.mainInputDate.addEventListener('input', function (e) {
  todoDate = e.target.value;
});
