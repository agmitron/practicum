const HOST = "https://jsonplaceholder.typicode.com";

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
}

export const loadTasks = () => {
  return fetch(`${HOST}/todos`).then(checkResponse);
};

export const deleteTask = (id) => {
  return fetch(`${HOST}/todos/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
};

export const createTask = (title) => {
  return fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      title,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(checkResponse);
};
