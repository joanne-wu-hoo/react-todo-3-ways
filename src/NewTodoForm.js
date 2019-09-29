import React, { Component } from "react";
import uuid from "uuid/v4";

class NewTodoForm extends Component {
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
    let newTodoObj = {
      id: uuid(),
      content: this.state.task
    };
    this.props.add(newTodoObj);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="task"
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

export default NewTodoForm;
