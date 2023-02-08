
//т.к. сервер не разрешает CORS запросы для работы с api можно проксировать через
//https://cors-anywhere.herokuapp.com/
//или поднять локальное прокси https://www.npmjs.com/package/cors-anywhere
const PROXY_API = 'http://localhost:8080/';

const FORISMATIC_API = `${PROXY_API}https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru`;

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export const getRandomQuote = () => {
  return fetch(FORISMATIC_API).then(getResponse);
}
