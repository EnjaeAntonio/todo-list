import ToDoItem from "./ToDoItem";

function ToDoListMain({todos, toggleTodo, deleteTodo}) {
  const completedTodos = todos.filter(todo => todo.completed);
  const unCompletedTodos = todos.filter(todo => !todo.completed);

  return (
    <>
    <h1 className="todo-heading text-4xl mt-3">Todo List</h1>
    <ul className="list container">
    {unCompletedTodos.map(todo => {
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
    <ul className="list container">
    {completedTodos.map(todo => {
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