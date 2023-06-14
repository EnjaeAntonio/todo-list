import './style/style.css';
import { useEffect, useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoListMain from './components/ToDoListMain';
function App() {
  const item = "ITEM";
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem(item)
    if(localValue == null) return []
    return JSON.parse(localValue)
  });


  useEffect(() => {
    localStorage.setItem(item, JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos(currentTodos => {
      return [ ...currentTodos, 
        { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id  !== id)
    })
  }

  return (
    <div className="container">
      <ToDoForm 
      onSubmit={addTodo} 
      />
      <ToDoListMain  
      todos={todos} 
      toggleTodo={toggleTodo} 
      deleteTodo={deleteTodo}
      />
    </div>

  );
}


export default App;
