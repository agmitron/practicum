export class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
  }

  getTasks() {
    return fetch(this.url, {
      headers: this.headers,
    })
      .then((res) => this._parseResponse(res))
      .catch((err) => Promise.reject(err));
  }

  createTask({ name }) {
    return fetch(this.url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name,
      }),
    })
      .then((res) => this._parseResponse(res))
      .catch((msg) => Promise.reject(new Error(msg)));
  }

  deleteTask(id) {
    return fetch(`${this.url}/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then((res) => this._parseResponse(res))
      .catch((msg) => Promise.reject(new Error(msg)));
  }
}
