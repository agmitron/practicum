import { TodoListForm } from './todo-list-form.js';
import { TodoListItem } from './todo.js';
import { TodoList } from './todo-list.js';
import { Api } from './api.js';

const config = {
  url: 'https://api-test.pa7lux.ru/streams',
  headers: {
    'Content-Type': 'application/json',
  },
};

const page = document.querySelector('.page');
const createTodoListForm = (...args) => new TodoListForm(...args);
const createTodoListItem = (...args) => new TodoListItem(...args);
const api = new Api(config);

api.getTasks()
  .then(data => {
    const todoList = new TodoList(data, createTodoListForm, createTodoListItem, api);
    todoList.render(page);
  })
  .catch(err => {
    console.log('Ошибка при загрузке карточек', err.message);
  });
