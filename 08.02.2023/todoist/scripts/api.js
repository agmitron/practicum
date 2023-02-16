const headers = {
  'Authorization': `Bearer b3239a9e2125288637af68d27b6f1b723cb7a96b`,
  'Content-Type': 'application/json'
}

export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error with code ${res.status}`);
}

export const getProjects = () => {
  return fetch('https://api.todoist.com/rest/v2/projects', {
    headers
  }).then(handleResponse)
}

export const getAllTasks = () => {
  return fetch('https://api.todoist.com/rest/v2/tasks', {
    headers
  }).then(handleResponse)
}

export const getProjectTasks = (projectId) => {
  return fetch(`https://api.todoist.com/rest/v2/tasks?project_id=${projectId}`, {
    headers
  }).then(handleResponse)
}

export const createTask = (content, project_id) => {
  return fetch('https://api.todoist.com/rest/v2/tasks', {
    headers,
    method: 'POST',
    body: JSON.stringify({
      content,
      project_id
    })
  }).then(handleResponse)
}
