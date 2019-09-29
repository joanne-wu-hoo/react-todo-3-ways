import React, { useState } from 'react';

function HookTodoForm({addTodo}){
  const [value, setValue] = useState(""); // "" is initial state

  const handleSubmit = e => {
    e.preventDefault();
    // prevent empty submission
    if (!value) return; 
    addTodo(value);
    // reset form
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        name="value"
        value={value}
        placeholder="Add a new todo"
        onChange={e => setValue(e.target.value)}
      >
      </input>
      <button className="btn btn-success">Add</button>
    </form>
  )
  
}

export default HookTodoForm;