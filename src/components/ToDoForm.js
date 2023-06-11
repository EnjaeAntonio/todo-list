import { useState } from "react";

function ToDoForm({onSubmit}) {

const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit(newItem);
    setNewItem("");
  }

  const handleInput = (e) =>{
    setNewItem(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}  lassName="form-item">
    <div className="form-row">
      <label htmlFor="item">New item</label>
      <input value={newItem} onChange={handleInput} type="text" id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>
  )
}

export default ToDoForm;