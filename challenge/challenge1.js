// create a interface to describe the variable todoItems.

const todoItems = [
    {id: 1, title: 'Learn HTML', status: 'done', completedDate: new Date('2021-09-11') },
    {id: 2, title: 'Learn CSS', status: 'in-progress', completedDate: new Date('2022-05-05') },
    {id: 3, title: 'Learn JavaScript', status: 'todo', completedDate: new Date('2021-05-18') },
]

function addTodoItem( todo ) {
    const id = getNextId( todoItems )

    const newTodo = {
        id,
        title: todo,
        status: 'todo',
    }
    todoItems.push( newTodo );
    return newTodo
}

function getNextId( items ) {
    return items.reduce(( max, x) => x.id > max ? max : x.id, 0) + 1;
}

const newTodo = addTodoItem('Buy lots of stuff with all the money we make from the app.')

console.log(JSON.stringify( newTodo ));