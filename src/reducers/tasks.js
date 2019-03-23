const tasks = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: action.id,
                    label: action.label,
                    completed: false
                }
            ];
        case 'TOGGLE':
            return state.map(task =>
                (task.id === action.id) ? {...task, completed: !task.completed} : task
            );
        default:
            return state;
    }
};

export default tasks