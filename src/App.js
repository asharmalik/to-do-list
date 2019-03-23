import React, { Component } from 'react';
import Task from './components/Task';
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
        this.state.tasks.map((task) => {
          return <Task completed={task.completed} label={task.label}></Task>;
        })
      }
    </div>
  }

  render() {
    return (
      <div className="App">
        {this.getTasks()}
      </div>
    );
  }
}

export default App;
