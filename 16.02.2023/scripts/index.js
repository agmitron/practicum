import { TodoListForm } from './todo-list-form.js';
import { Todo } from './todo.js';
import { TodoList } from './todo-list.js';
import { Api } from './api.js';

const config = {
  url: 'https://api-test.pa7lux.ru/streams',
  headers: {
    'Content-Type': 'application/json',
  },
};

const api = new Api(config);

const todoList = new TodoList('.todolist', (data) => {
  const todoItem = new Todo({
    data,
    delClickHandler: (todo) => {
      api
        .deleteTask(todo.getId())
        .then(() => {
          todo.remove();
        })
        .catch((e) => {
          console.log('Ошибка при удалении', e);
        });
    },
    copyClickHandler: (name) => {
      api
        .createTask({ name })
        .then((res) => {
          todoList.renderItem(res);
        })
        .catch((e) => {
          console.log('Ошибка при копировании', e);
        });
    },
  });

  todoList.addItem(todoItem.getTodo());
});

new TodoListForm('.todolist-form', (name) => {
  api
    .createTask({ name })
    .then((res) => {
      todoList.renderItem(res);
    })
    .catch((e) => {
      console.log('Ошибка при создании', e);
    });
});

api
  .getTasks()
  .then((todos) => {
    todoList.renderItems(todos);
  })
  .catch((err) => {
    console.log('Ошибка при загрузке заданий', err.message);
  });
