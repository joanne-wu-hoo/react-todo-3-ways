import React, { useState } from 'react';
import uuid from "uuid/v4";
import HookTodo from './HookTodo';
import Todo from '../ClassComponents/Todo';
import { setState } from 'expect/build/jestMatchersObject';
import HookTodoForm from './HookTodoForm';


function HookTodoList(){
  // establish todo & setTodo 
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "Make class version of Todo app"
    },
    {
      id: 2,
      content: "Make function version of Todo app"
    },
    {
      id: 3,
      content: "Make typescript version of Todo app"
    }
  ]);



  // addTodo
  const addTodo = text => {
    let newTodo = {
      id: uuid(),
      content: text
    }
    let updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  }

  // removeTodo
  const removeTodo = id => {
    let updatedTodos = todos.filter(t => t.id !== id);
    setTodos(updatedTodos);
  }

  // editTodo
  // const editTodo = (id, newContent) => {
  //   let updatedTodos = todos.map(todo =>
  //     todo.id === id 
  //       ? {...todo, content: newContent}
  //       : todo
  //   )
  //   setTodos(updatedTodos);
  // }

  // map through todos and create Todo components
  const allTodos = todos.map(todo => (
    <HookTodo 
      key={todo.id}
      id={todo.id}
      text={todo.content}
      removeTodo={removeTodo}
      // editTodo={editTodo}
    />
  ))

  return(
    <div>
      { allTodos }
      <HookTodoForm 
        addTodo={addTodo}
      />
    </div>
  )

}

export default HookTodoList;