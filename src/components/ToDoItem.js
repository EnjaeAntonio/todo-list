import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function ToDoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <li className={`todo-box flex justify-between items-center my-3 py-3 px-2 ${completed ? 'finished' : 'unfinished'}`}>
      <div className="flex items-center">
        <label htmlFor={id} className="flex items-center">
          <h3 className={`text-lg mx-2 mr-3 ${completed ? 'completed-text' : ''}`}>{title}</h3>
        </label>
      </div>
      <div className="flex gap-2">
      <FontAwesomeIcon 
        icon={faCheck} 
        className={`todo-icon`} 
        onClick={() => toggleTodo(id, !completed)}
      />
      <FontAwesomeIcon 
        icon={faTrash} 
        onClick={() => deleteTodo(id)} 
        className="trash-btn"
      />
      </div>
    </li>
  )
}

export default ToDoItem;
