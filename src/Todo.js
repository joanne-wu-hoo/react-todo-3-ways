import React, {Component} from 'react';

class Todo extends Component{
  state = {
    content: this.props.content,
    editing: false
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleDelete = () => {
    this.props.deleteSelf(this.props.id);
  }

  toggleEdit = () => {
    this.setState(st => ({
      ...this.state,
      editing: !st.editing,
    }));
  }
  
  handleEdit = (evt) => {
    evt.preventDefault();
    this.props.editSelf(this.props.id, this.state.content);
    this.toggleEdit();
  }

  render(){
    return(
      <div id={this.props.id}>
        <form onSubmit={this.handleEdit}>
        <div className="input-group">
          <input
            type="text" 
            name="content"
            className={this.state.editing ? "form-control border-0 bg-light" : "form-control shadow-none border-0 bg-white"} 
            readOnly={this.state.editing ? '' : "readonly"}
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button className="border-0 bg-white box-shadow-none" onClick={()=>this.toggleEdit}>
            <i className="fa fa-pencil text-primary box-shadow-none"></i>
          </button>
          <button className="border-0 bg-white shadow-none" onClick={this.handleDelete}>
            <i class="fa fa-trash text-danger"></i>
          </button>
        </div>
        </form>
      </div>
    )
  }
}

export default Todo;
