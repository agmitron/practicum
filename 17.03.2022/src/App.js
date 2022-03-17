import { useEffect, useState } from 'react'
import './App.css';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(setTodos)
  }, [])

  const createTodo = async (body) => {
    fetch('https://jsonplaceholder.typicode.com/todos', { method: 'POST', body })
      .then(res => res.json())
      .then((data) => setTodos(prev => [{...body, id: data.id}, ...prev]))
  }

  const deleteTodo = async (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { method: 'DELETE' })
      .then(() => setTodos(prev => prev.filter(todo => todo.id !== id)))
  }

  const editTodo = async (id, newText) => {
    console.log({newText})

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { method: 'PATCH', body: JSON.stringify({title: newText}), headers: {
      'Content-Type': 'application/json'
    }})
      .then(() => setTodos(prev => prev.map(todo => todo.id === id ? {...todo, title: newText} : todo)))
  }

  return (
    <div className="App">
      <CreateTodo createTodo={createTodo} />

      {todos.map((todo) => <TodoItem key={todo.id} text={todo.title} edit={newText => editTodo(todo.id, newText)} delete={() => deleteTodo(todo.id)} />)}
    </div>
  );
}

export default App;
