import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Task extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="Task">
                <input type="radio" checked={this.props.completed} onClick={this.props.onChange} onChange={() => {}}></input> {this.props.label}
            </div>
        );
    }
}

export default Task;
