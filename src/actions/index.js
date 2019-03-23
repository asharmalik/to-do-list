let toDoId = 0;

export const ACTIONS = {
    ADD: 'ADD',
    TOGGLE: 'TOGGLE'
};

export const addTask = label => ({
    type: ACTIONS.ADD,
    id: toDoId++,
    label
});

export const toggleTask = id => ({
    type: ACTIONS.TOGGLE,
    id
});


