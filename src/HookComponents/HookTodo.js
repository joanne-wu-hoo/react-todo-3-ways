import React, { useState } from 'react';

function HookTodo({id,text,removeTodo, editTodo}){
  const [value, setValue] = useState(text);
  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = e => {
    e.preventDefault();
    editTodo(id, value);
  }

  return (
    <form onSubmit={handleEdit}>
      <div className="input-group">
        <input
          className={isEditable ? "form-control border-0 bg-light" : "form-control shadow-none border-0 bg-white"} 
          readOnly={isEditable ? '' : "readonly"}            
          type="text"
          name="value"
          value={value}
          onChange={e => setValue(e.target.value)}
        >
        </input>
        <button onClick={()=>setIsEditable(!isEditable)} className="border-0 bg-white box-shadow-none">
          <i className="fa fa-pencil text-success box-shadow-none"></i>
        </button>
        <button onClick={()=>removeTodo(id)} className="border-0 bg-white shadow-none">
          <i class="fa fa-trash text-danger"></i>
        </button>
      </div>
    </form>
  )
}

export default HookTodo;
