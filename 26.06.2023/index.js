const todos = document.querySelector(".todos");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    if (!response.ok) {
      return Promise.reject(
        `Request failed with status code ${response.status}`
      );
    }

    return response.json();
  })
  .then((data) => {
    console.log("RESPONSE");

    data.forEach((element) => {
      const isChecked = element.completed ? "checked" : "";

      const todo = `
        <li>
          <h4>${element.title}</h4>
          <p>#${element.id}</p>
          <input type="checkbox" ${isChecked}/>
        </li>
      `;

      todos.insertAdjacentHTML("beforeend", todo);
    });
  })
  .catch((error) => {
    alert(error);

    document.body.insertAdjacentHTML("beforeend", `<p>Ошибка!</p>`);
  });

console.log("CONSOLE");
