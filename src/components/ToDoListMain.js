import ToDoItem from "./ToDoItem";

function ToDoListMain({ todos, toggleTodo, deleteTodo, completed }) {
  const completedTodos = todos.filter((todo) => todo.completed);
  const unCompletedTodos = todos.filter((todo) => !todo.completed);
  const completedLength = todos.filter((todo) => todo.completed).length;
  const unCompletedLength = todos.filter((todo) => !todo.completed).length;
  return (
    <>
      <div className="grid grid-cols-2">
        <p className="text-white">Completed: {completedLength}</p>
        <p className="text-white text-right">
          Uncompleted: {unCompletedLength}
        </p>
      </div>
      <h1 className="todo-heading text-4xl mt-3">Todo List</h1>
      <ul className="list container">
        {unCompletedTodos.map((todo) => {
          return (
            <ToDoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
      <ul className="list container">
        {completedTodos.map((todo) => {
          return (
            <ToDoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ToDoListMain;
