import {useState} from 'react'
import "./TodoItem.css";

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState('')

  return (
    <div className="todo">
      {isEditing && <input onChange={e => setText(e.target.value)} placeholder={props.text} />} 
      {!isEditing && <p>{props.text}</p>}
      <button className="edit" onClick={() => {
        console.log({isEditing, text})

        if (isEditing) {
          props?.edit(text)
        }

        setIsEditing(prev => !prev)
      }}>
        {isEditing ? 'Done' : 'Edit'}
      </button>
      <button className="delete" onClick={props.delete}>Delete</button>
    </div>
  );
}

export default TodoItem;
