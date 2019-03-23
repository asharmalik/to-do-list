import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddTask from './components/AddTask';
import TasksList from './components/TasksList';
import './App.css';
import { addTask, toggleTask } from './actions';

class App extends Component {
  onAddTask = (task) => {
    this.props.dispatch(addTask(task));
  };

  onToggleTask = (id) => {
    this.props.dispatch(toggleTask(id));
  };

  render() {
    return (
      <div className="App-Container">
        <div className="App">
          <div className="App-Header">Tasks</div>
          <TasksList onToggleTask={this.onToggleTask}/>
          <AddTask className="Add-Task" onAddTask={this.onAddTask}/>
        </div>
      </div>
    );
  }
}

export default connect()(App);
