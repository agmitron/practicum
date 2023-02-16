export class TodoList {
  constructor(containerSelector, renderer) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addItem = (todo) => {
    this._container.append(todo);
  };

  renderItems = (todos) => {
    todos.forEach((todo) => this._renderer(todo));
  };

  renderItem = (todo) => {
    this._renderer(todo);
  };
}
