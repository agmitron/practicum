import { createTask, deleteTask, loadTasks } from './api.js';

const tasksContainer = document.querySelector(".todolist__list");
const tasksTemplate = document.querySelector("#todolist-form-template");
const taskTemplate = document.querySelector("#todolist-item-template");

//создает задачу
const createTaskElement = (task) => {
  const taskElement = taskTemplate.content.cloneNode(true).children[0];
  const taskText = taskElement.querySelector('.todolist-item__text');
  taskText.textContent = task.title;
  const deleteButton = taskElement.querySelector('.todolist-item__del');
  deleteButton.addEventListener('click', () => {
    console.log({task})
    deleteTask(task.id).then(() => {
      taskElement.remove();
    })
  })
  return taskElement;
}

//создает список задач
const createTasksElement = (tasks, projectId) => {
  const tasksElement = tasksTemplate.content.cloneNode(true);
  setTaskSubmitListener(tasksElement, projectId);
  const tasksList = tasksElement.querySelector('.todolist__tasks');
  tasksList.append(...tasks.map(createTaskElement));
  return tasksElement;
}

//навешивает обработчик добавления карточки
const setTaskSubmitListener = (tasksContainer, projectId) => {
  const submitForm = tasksContainer.querySelector('.todolist-form');
  const input = tasksContainer.querySelector('.todolist-form_input');
  const button = tasksContainer.querySelector('.todolist-form_submit');
  const tasksList = tasksContainer.querySelector('.todolist__tasks');

  submitForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const value = input.value
    createTask(value).then(() => {
      tasksList.prepend(createTaskElement({
        title: value
      }));
    })
  })
}

//отображает список задач на странице
const renderTasks = (tasks, projectId) => {
  tasksContainer.replaceChildren(createTasksElement(tasks, projectId));
}

//вызывает загрузку списка задач для выбранного проекта
export const loadProjectTasks = (projectId) => {
  loadTasks().then(tasks => {
    const randomId = Math.floor(Math.random() * 10)
    const projectTasks = tasks.slice(randomId * 10, projectId + 10)
    renderTasks(projectTasks, projectId)
  })
};
