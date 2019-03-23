import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ''
        };
    }

    onChange = (e) => {
        this.setState({
            task: e.target.value
        });
    };

    onKeyDown = (e) => {
        if(e.keyCode === 13){
            this.props.onAddTask(this.state.task);
            this.setState({
                task: ''
            });
        }
    };

    render() {
        return (
            <div className="Add-Task">
                <input className="Add-Task-Text" placeholder="Add task" type="text" onKeyDown={this.onKeyDown} value={this.state.task} onChange={this.onChange}></input>
            </div>
        );
    }
}

export default AddTask;
