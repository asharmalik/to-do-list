import {ACTIONS} from '../actions'

const tasks = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.ADD:
            return [
                ...state,
                {
                    id: action.id,
                    label: action.label,
                    completed: false
                }
            ];
        case ACTIONS.TOGGLE:
            return state.map(task =>
                (task.id === action.id) ? {...task, completed: !task.completed} : task
            );
        default:
            return state;
    }
};

export default tasks