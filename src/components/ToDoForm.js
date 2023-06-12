import { useState } from "react";

function ToDoForm({onSubmit}) {

const [newItem, setNewItem] = useState("");
const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(newItem.trim() !== ''){
      onSubmit(newItem);
      setNewItem("");
      setErrorMessage("");
    }else {
      setErrorMessage('Text is empty');
    }
  }

  const handleInput = (e) =>{
    setNewItem(e.target.value)
    setErrorMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="grid form-row">
      <label htmlFor="item" className="text-2xl">New item</label>
      <input value={newItem} placeholder={errorMessage ? errorMessage : "Create Todo!"} onChange={handleInput} type="text" id="item" className="px-2 py-2"/>
    </div>
    <button 
    className="btn btn-add text-center mt-2 py-1">
      Add
      </button>
  </form>
  )
}

export default ToDoForm;