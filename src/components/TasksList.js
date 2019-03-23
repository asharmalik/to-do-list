import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Task from './Task';

class TasksList extends Component {
    static propTypes = {
        onTaskChange: PropTypes.func.isRequired,
    };

    getTasks() {
        return <div>
            {
                this.props.tasks.map((task, index) => {
                    return <Task key={index} completed={task.completed} label={task.label} onChange={this.props.onTaskChange}></Task>;
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
    console.log('state', state);
    return state;
};

export default connect(mapStateToProps)(TasksList);