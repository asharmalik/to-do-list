import React, { Component } from 'react';

class AddTask extends Component {
    render() {
        return (
            <div className="Add-Task">
                <input className="Add-Task-Text" placeholder="Add task" type="text"></input>
            </div>
        );
    }
}

export default AddTask;
