export class TodoListForm {
  constructor(formSelector, submitHandler) {
    this._form = document.querySelector(formSelector);
    this._submitHandler = submitHandler;
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodoName = this._form.elements['todo-name'].value;

      this._submitHandler(newTodoName);
    });
  }
}
