import React, {Component} from 'react';
import ClassTodoList from './ClassComponents/ClassTodoList'
import HookTodoList from './HookComponents/HookTodoList'

class App extends Component {
  render(){
    return(
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm">
            <h3 className="text-center">Class Components</h3> 
            <ClassTodoList />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm">
            <h3 className="text-center">Hooks</h3> 
            <HookTodoList />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

