const request = document.getElementById('request')
const title = document.getElementById('quote')

const BASE_URL = 'https://api.kanye.rest'

const getQuote = (id) => {
  if (id) {
    return fetch(`${BASE_URL}/${id}`)
      .then(response => {
        if (!response.ok) {
          // throw Error('Server error')
          return Promise.reject('Server error')
        }

        return response.text()
      })
  }

  return fetch(BASE_URL)
    .then(response => {
      if (!response.ok) {
        // throw Error('Server error')
        return Promise.reject('Server error')
      }

      return response.text()
    })
}

request.addEventListener('click', () => {
  request.disabled = true

  getQuote()
    .then((str) => {
      title.textContent = str
    })
    .catch((error) => {
      title.textContent = 'Что-то пошло не так. Попробуйте снова'
      console.error(error)
    })
    .finally(() => {
      setTimeout(() => {
        request.disabled = false
      }, 3000)
    })
})

const a = 1;
const b = 10

new Promise((resolve, reject) => {
  if (a < 0) {
    return reject()
  }

  return resolve()
})
