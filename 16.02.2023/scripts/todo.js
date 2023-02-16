export class Todo {
  static _template = document.querySelector('#todolist-item-template').content;

  constructor({ data, delClickHandler, copyClickHandler }) {
    this._view = null;
    this._todo = data;
    this._delClickHandler = delClickHandler;
    this._copyClickHandler = copyClickHandler;
  }

  getTodo = () => {
    this._view = Todo._template.cloneNode(true).children[0];

    const todoText = this._view.querySelector('.todolist-item__text');
    todoText.textContent = this._todo.name;
    todoText.dataset.todoId = this._todo.id;

    this._view.querySelector('.todolist-item__del').addEventListener('click', () => {
      this._delClickHandler(this);
    });

    this._view.querySelector('.todolist-item__copy').addEventListener('click', () => {
      this._copyClickHandler(this._todo.name);
    });

    return this._view;
  };

  getId = () => {
    return this._todo.id;
  };

  remove = () => {
    this._view.remove();
    this._view = null;
  };
}
