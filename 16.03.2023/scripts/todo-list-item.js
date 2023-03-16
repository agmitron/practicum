export class TodoListItem {
  static _template = document.querySelector("#todolist-item-template").content;

  constructor({ todo, addItem, api, onDelete, onCopy }) {
    this._todo = todo;
    this._addItem = addItem;
    this._api = api;
    this._onDelete = onDelete;
    this._onCopy = onCopy;
  }

  // _delClickHandler = () => {
  //   this._api
  //     .deleteTask(this._todo.id)
  //     .then(() => {
  //       this._view.remove();
  //     })
  //     .catch((err) => {
  //       console.log("Ошибка при удалении задания", err);
  //     });
  // };

  // _copyClickHandler = () => {
  //   this._api
  //     .createTask({
  //       name: this._todo.title,
  //     })
  //     .then((res) => {
  //       debugger;
  //       this._addItem(res);
  //     })
  //     .catch((err) => {
  //       console.log("Ошибка при копировании задания", err);
  //     });
  // };

  render = (container) => {
    this._view = TodoListItem._template.cloneNode(true).children[0];
    const todoText = this._view.querySelector(".todolist-item__text");
    todoText.textContent = this._todo.title;
    todoText.dataset.todoId = this._todo.id;
    this._view
      .querySelector(".todolist-item__del")
      .addEventListener("click", () => this._onDelete(this));
    this._view
      .querySelector(".todolist-item__copy")
      .addEventListener("click", () => this._onCopy(this));
    container.append(this._view);
  };
}

const deleteButton = document.querySelector('.delete-button')
const confirmDeletePopup = document.querySelector('.popup')
const confirmDeleteButton = document.querySelector('.confirm-delete-button')

deleteButton.addEventListener('click', () => {
  /// открыли попап

  const deleteCard = () => {
    // ЛОГИКА УДАЛЕНИЯ

    confirmDeleteButton.removeEventListener('click', deleteCard)
  }
  confirmDeleteButton.addEventListener('click', deleteCard)
})
