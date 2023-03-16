import { TodoListForm } from "./todo-list-form.js";
import { TodoListItem } from "./todo-list-item.js";
import { TodoList } from "./todo-list.js";
import { Api } from "./api.js";

const config = {
  url: "https://jsonplaceholder.typicode.com/todos",
  headers: {
    "Content-Type": "application/json",
  },
};

const page = document.querySelector(".page");
const api = new Api(config);

api.getTasks().then((items) => {
  const todoList = new TodoList({
    items,
    api,
    createTodoListForm: (addItem, api) =>
      new TodoListForm({
        addItem,
        api,
        onSubmit: (item) => {
          api
            .createTask({
              name: document.querySelector(".todolist-form_input").value,
            })
            .then((res) => {
              console.log({ item });
              alert("OnSubmit");
            })
            .catch((err) => {
              console.log("Ошибка при создании задания", err);
            });
        },
      }),
    createTodoListItem: (todo, addItem, api) => {
      return new TodoListItem({
        todo,
        addItem,
        api,
        onDelete: (view) => {
          api
            .deleteTask(todo.id)
            .then(() => {
              view.remove();
            })
            .catch((err) => {
              console.log("Ошибка при удалении задания", err);
            });
        },
        onCopy: (view) => {
          api
            .createTask({
              name: todo.title,
            })
            .then((res) => {
              alert("Copied");
            })
            .catch((err) => {
              console.log("Ошибка при копировании задания", err);
            });
        },
      });
    },
  });
  todoList.render(page);
});
// .catch((err) => {
//   console.log("Ошибка при загрузке карточек", err.message);
// });
