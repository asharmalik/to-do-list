import React, { Component } from 'react';
import Task from './components/Task';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [
        {
          label: "Laundry",
          completed: false
        },
        {
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
          return <Task key={index} completed={task.completed} label={task.label}></Task>;
        })
      }
    </div>
  }

  render() {
    return (
      <div className="App-Container">
        <div className="App">
          <div className="App-Header">Tasks</div>
          <div className="App-Tasks">
            {this.getTasks()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
