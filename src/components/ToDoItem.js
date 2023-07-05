import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function ToDoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li
      className={`todo-box flex justify-between items-center my-3 py-3 px-2 ${
        completed ? "finished" : "unfinished"
      }`}>
      <div className="todo-items flex items-center">
        <label htmlFor={id} className="flex items-center">
          <h3
            title="Task"
            className={`text-lg mx-2 mr-3 ${
              completed ? "completed-text" : ""
            }`}>
            {title}
          </h3>
        </label>
      </div>
      <div className="font-box flex gap-2">
        <FontAwesomeIcon
          icon={completed ? faTimes : faCheck}
          className={`todo-icon`}
          onClick={() => toggleTodo(id, !completed)}
          title={completed ? "Uncheck" : "Check"}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(id)}
          className="trash-btn"
          title="Trash"
        />
      </div>
    </li>
  );
}

export default ToDoItem;
