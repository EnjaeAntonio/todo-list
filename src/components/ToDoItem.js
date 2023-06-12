function ToDoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <li className="flex justify-between items-center my-3 py-3 px-2 ">
      <div className="flex items-center">
        <label htmlFor={id} className="flex items-center">
          <input 
            id={id}
            type="checkbox" 
            checked={completed}
            onChange = {e => toggleTodo(id, e.target.checked)}
            className=""
          />
          <p className="text-lg mx-2 mr-3">{title}</p>
        </label>
      </div>
      <button 
        onClick={() => deleteTodo(id)} 
        className="btn btn-danger border border-solid text-customRed border-customRed">
        Delete
      </button>
    </li>
  )
}

export default ToDoItem;
