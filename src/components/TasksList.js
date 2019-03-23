import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Task from './Task';

class TasksList extends Component {
    static propTypes = {
        onToggleTask: PropTypes.func.isRequired,
    };

    getTasks() {
        return <div>
            {
                this.props.tasks.map((task, index) => {
                    return <Task key={index} completed={task.completed} label={task.label} onChange={() => {this.props.onToggleTask(task.id)}}></Task>;
                })
            }
        </div>
    }

    render() {
        return (
            <div className="App-Tasks">
                {this.getTasks()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(TasksList);