export class TodoListItem {
  static _template = document.querySelector('#todolist-item-template').content;

  constructor(todo, addItem, api) {
    this._todo = todo;
    this._addItem = addItem;
    this._api = api;
  }

  _delClickHandler = () => {
    this._api
      .deleteTask(this._todo.id)
      .then(() => {
        this._view.remove();
      })
      .catch((err) => {
        console.log('Ошибка при удалении задания', err);
      });
  };

  _copyClickHandler = () => {
    this._api
      .createTask({
        name: this._todo.name,
      })
      .then((res) => {
        this._addItem(res);
      })
      .catch((err) => {
        console.log('Ошибка при копировании задания', err);
      });
  };

  render = (container) => {
    this._view = TodoListItem._template.cloneNode(true).children[0];
    const todoText = this._view.querySelector('.todolist-item__text');
    todoText.textContent = this._todo.name;
    todoText.dataset.todoId = this._todo.id;
    this._view.querySelector('.todolist-item__del').addEventListener('click', this._delClickHandler);
    this._view.querySelector('.todolist-item__copy').addEventListener('click', this._copyClickHandler);
    container.append(this._view);
  };
}
