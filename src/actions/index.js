let toDoId = 0;

export const addTodo = label => ({
    type: 'ADD_TODO',
    id: toDoId++,
    label
});