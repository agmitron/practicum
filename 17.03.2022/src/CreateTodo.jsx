import { useState } from 'react'
import './CreateTodo.css'

function CreateTodo(props) {
    const [title, setTitle] = useState('')

    return (
        <form className="create-todo" onSubmit={e => {
            e.preventDefault()
            props.createTodo({title})
        }}>
            <input className="create-todo__input" onChange={e => setTitle(e.target.value)} />
            <button>Add todo</button>
        </form>
    )
}

export default CreateTodo