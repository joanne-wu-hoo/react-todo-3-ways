import React, { Component } from "react";
import ClassTodoForm from "./ClassTodoForm";
import ClassTodo from "./ClassTodo";

class ClassTodoList extends Component {
  state = {
    todos: [
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
    ]
  };

  addTodo = newTodoObj => {
    this.setState(st => ({
      todos: this.state.todos.concat(newTodoObj)
    }));
  };

  removeTodo = id => {
    this.setState(st => ({
      todos: st.todos.filter(t => t.id !== id)
    }));
  };

  editTodo = (id, updatedContent) => {
    this.setState(st => ({
      todos: st.todos.map(todo =>
        todo.id === id ? { ...todo, content: updatedContent } : todo
      )
    }));
  };

  render() {
    let todos = this.state.todos.map(t => (
      <ClassTodo
        key={t.id}
        id={t.id}
        content={t.content}
        deleteSelf={this.removeTodo}
        editSelf={this.editTodo}
      />
    ));

    return (
      <div className="container mt-5">
        <h4>To-dos</h4>
        <div>{todos}</div>
        <ClassTodoForm add={this.addTodo} />
      </div>
    );
  }
}

export default ClassTodoList;
