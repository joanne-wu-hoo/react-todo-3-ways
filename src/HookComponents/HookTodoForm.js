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
      <div className="input-group">
        <input
          type="text"
          name="value"
          value={value}
          placeholder="Add a new todo"
          className="form-control"
          onChange={e => setValue(e.target.value)}
        >
        </input>
        <span className="input-group-btn">
          <button className="btn btn-success">Add!</button>
        </span>
      </div>
    </form>
  )
  
}

export default HookTodoForm;