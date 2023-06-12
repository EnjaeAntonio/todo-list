function ToDoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <li className="flex items-center my-3 py-3 px-2 ">
      <label htmlFor={`todo-${id}`} className="flex items-center">
        <input 
          id={`todo-${id}`}
          type="checkbox" 
          checked={completed}
          onChange = {e => toggleTodo(id, e.target.checked)}
          className=""
        />
        <p className="text-2xl mx-2 mr-3">{title}</p>
      </label>
      <button 
        onClick={() => deleteTodo(id)} 
        className="btn btn-danger border border-solid text-customRed border-customRed">Delete
      </button>
    </li>
  )
}


export default ToDoItem;