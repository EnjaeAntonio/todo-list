function ToDoItem({completed, id, title, date, toggleTodo, deleteTodo}) {
  return (
    <li>
    <label>
      <input type="checkbox" checked={completed}
      onChange = {e => toggleTodo(id, e.target.checked)}
      />
      {title}<br/>
      {date}
    </label>
    <button 
     onClick={() => deleteTodo(id)} 
    className="btn btn-danger">Delete</button>
  </li>
  )
}

export default ToDoItem;