import React, { Component } from "react";
import uuid from "uuid/v4";

class ClassTodoForm extends Component {
  state = {
    task: ""
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    // prevent empty submission
    if (this.state.task==="") return;

    let newTodoObj = {
      id: uuid(),
      content: this.state.task
    };
    this.props.add(newTodoObj);
    
    // reset form
    this.setState({task: ""})
  };

  render() {
    return (
      <form className="mt-2" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="task"
            placeholder="Add a new todo"
            className="form-control"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-primary">
              Add!
            </button>
          </span>
        </div>
      </form>
    );
  }
}

export default ClassTodoForm;
