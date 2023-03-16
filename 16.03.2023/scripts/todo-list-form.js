export class TodoListForm {
  static _template = document.querySelector("#todolist-form-template").content;

  constructor({ addItem, api, onSubmit = () => {} }) {
    this._addItem = addItem;
    this._api = api;
    this._onSubmit = onSubmit;
  }

  render = (container) => {
    this._view = TodoListForm._template.cloneNode(true).children[0];
    this._view.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._onSubmit(this)
    });
    container.append(this._view);
  };
}
