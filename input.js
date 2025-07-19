import { domElements } from './dom.js';
export let projectText;
domElements.sidebarInput.addEventListener('input', function (e) {
  projectText = e.target.value;
});
