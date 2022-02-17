const postsContainer = document.querySelector('.posts-container')
const form = document.querySelector('.create-post')

function createCard(id, title = 'New post', body = 'Lorem ipsum', userId = 'GREAT') {
  return `
    <div class="card">
      <h3>${title}</h3>
      <p>${body}</p>
      <b>Created by user with id ${userId}</b>
      <p>#${id}</p>
    </div>
  `
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => {
    data.forEach((post) => {
      postsContainer.insertAdjacentHTML('beforeend', createCard(post.id, post.title, post.body, post.userId))
    })
  })

form.addEventListener('submit', e => {
  e.preventDefault()

  const body = new FormData(e.target)

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
  })
    .then(res => res.json())
    .then(data => postsContainer.insertAdjacentHTML('afterbegin', createCard(data.id)))
})


class Api {
  getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(res)
      })
  }
}

// const api = new Api()

// api.getPosts().then(() => {}).catch()
