import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddTask from './components/AddTask';
import TasksList from './components/TasksList';
import './App.css';
import { addTask } from './actions';

class App extends Component {
  onAddTask = (task) => {
    this.props.dispatch(addTask(task));
  };

  onTaskChange = (e) => {
    console.log('task clicked');
    console.log(e.target);
  };

  render() {
    return (
      <div className="App-Container">
        <div className="App">
          <div className="App-Header">Tasks</div>
          <TasksList onTaskChange={this.onTaskChange}/>
          <AddTask className="Add-Task" onAddTask={this.onAddTask}/>
        </div>
      </div>
    );
  }
}

export default connect()(App);
