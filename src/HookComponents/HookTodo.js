import React, { useState } from 'react';

function HookTodo({key,id,text,removeTodo, editTodo}){
  return (
    <div>
      { text }
      {/* <button className="border-0 bg-white box-shadow-none" onClick={()=>editTodo(id)}>
        <i className="fa fa-pencil text-primary box-shadow-none"></i>
      </button> */}
      <button className="border-0 bg-white shadow-none" onClick={()=>removeTodo(id)}>
        <i class="fa fa-trash text-danger"></i>
      </button>
    </div>
  )
  
}

export default HookTodo;