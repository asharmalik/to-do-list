import React, { Component } from 'react';
import Task from './components/Task';
import AddTask from './components/AddTask';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [
        {
          id: 0,
          label: "Laundry",
          completed: false
        },
        {
          id: 1,
          label: "Dishes",
          completed: false
        }
      ]
    }
  }

  getTasks() {
    return <div>
      {
        this.state.tasks.map((task, index) => {
          return <Task key={index} completed={task.completed} label={task.label} onClick={this.onTaskClick}></Task>;
        })
      }
    </div>
  }

  onAddTask(task) {
    console.log(task);
  }

  onTaskClick(e) {
    console.log('task clicked');
  }

  render() {
    return (
      <div className="App-Container">
        <div className="App">
          <div className="App-Header">Tasks</div>
          <div className="App-Tasks">
            {this.getTasks()}
          </div>
          <AddTask className="Add-Task" onAddTask={this.onAddTask}/>
        </div>
      </div>
    );
  }
}

export default App;
