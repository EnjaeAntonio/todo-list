import ToDoItem from "./ToDoItem";

function ToDoListMain({todos, toggleTodo, deleteTodo}) {

  return (
    <>
    <h1>Todo List</h1>
    <ul className="list">
    {todos.map(todo => {
      return (
        <ToDoItem 
        {...todo}
        key={todo.id}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        />
      )
    })}
    </ul>
  </>
  )
}

export default ToDoListMain;