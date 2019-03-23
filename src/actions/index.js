let toDoId = 0;

export const addTask = label => ({
    type: 'ADD',
    id: toDoId++,
    label
});