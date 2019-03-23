import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="Task">
                <input type="radio" checked={this.props.completed}></input> {this.props.label}
            </div>
        );
    }
}

export default Task;
