import { domElements } from './dom.js';
//Project
export function addProject(id, text) {
  const html = `<li class="sidebar-li-box" id=${id}>
              <p class="list-paragraf">${text}</p>
              <svg
                class="icon-x"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path class="icon-x"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </li>`;
  domElements.sidebarUl.insertAdjacentHTML('afterbegin', html);

  domElements.sidebarFormBox.classList.add('hidden');
}
export function updateProjectList(projects) {
  domElements.sidebarUl.innerHTML = '';
  projects.forEach(function (project) {
    addProject(project.getId(), project.getText());
  });
}

//Todo
export function addTodo(id, text, date) {
  const html = `<li class="li-box" id=${id}>
              <div class="todo-item">
                <svg
                  class="main-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>

                <p class="todo-p">Title:</p>
                <p class="todo-p-text">${text}</p>
              </div>
              <div class="todo-item">
                <svg
                  class="main-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <p class="todo-p">Due date:</p>
                <p class="todo-p-date">${date}</p>
              </div>
              <div class="todo-btn-div">
                <button class="btn-edit">edit</button>
                <button class="btn-delete">delete</button>
              </div>
            </li>`;
  domElements.mainUl.insertAdjacentHTML('afterbegin', html);

  domElements.mainForm.classList.add('hidden');
}
export function updateTodoList(todoes) {
  domElements.mainUl.innerHTML = '';
  if (todoes.length === 0) {
    return;
  }
  todoes.forEach(function (todo) {
    addTodo(todo.getTodoId(), todo.getTodoText(), todo.getTodoDate());
  });
}
//Edit Todo
export function editTodo(todo, array, project) {
  project.setEditing(true);
  const list = document.getElementById(todo.getTodoId());
  list.innerHTML = '';
  const html = `<form class="form-edit-box"><div class="todo-item">
                <svg
                  class="main-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>

                <label class="todo-p" for="title">Title:</label>
              <input
                class="editmode-input"
                type="text"
                id="title-input-edit"
                name="title"
                required
              />
              </div>
              <div class="todo-item">
                <svg
                  class="main-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <label class="todo-p" for="date">Due date:</label>
              <input
                class="editmode-input"
                type="date"
                id="date-input-edit"
                name="date"
                required
              />
              </div>
              <div class="todo-btn-div">
                <button type="submit" class="btn-Finish-edit">finish edit</button>
                <button type="button" class="btn-cancel-todo-edit">cancel</button>
              </div></form>`;
  list.insertAdjacentHTML('afterbegin', html);

  const text = list.querySelector('#title-input-edit');
  const date = list.querySelector('#date-input-edit');

  text.value = `${todo.getTodoText()}`;
  date.value = `${todo.getTodoDate()}`;

  const form = list.querySelector('.form-edit-box');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    todo.setTodoText(text.value);
    todo.setTodoDate(date.value);
    project.setEditing(false);
    updateTodoList(array);
  });

  const cancelBtn = list.querySelector('.btn-cancel-todo-edit');
  cancelBtn.addEventListener('click', function () {
    project.setEditing(false);
    updateTodoList(array);
  });
}
