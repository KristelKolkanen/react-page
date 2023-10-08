const { v4: uuidv4 } = require('uuid');

let todo = [
    { 
        id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        title: "Bring milk",
        priority: 0,
        created: 1696588906169,
        updated: null,
        deleted: false 
      }
];

exports.create = (req, res) => {
    const {title, priority} = req.body;
    if (!title || typeof priority !== 'number') {
        return res.status(400).send('Invalid request. Title and priority are required.');
      }
    const newTodo = {
        id: uuidv4(),
        title: title,
        priority: priority,
        created: Date.now(),
        updated: null,
        deleted: false
    }
    todo.push(newTodo)
}

exports.read = (req, res) => {
    const updated = todo.some((item) => item.updated === null);
    if (updated) {
        res.send(todo);
      } else {
        res.send('Nothing to do');
      }
}

exports.update = (req, res) => {
    const updatedTodo = req.body;
    const todoId = req.params.id;

    const todoToUpdate = todo.find((item) => item.id === todoId);

    if(!todoToUpdate){
        return res.status(404).send('task not found')
    }
    if(updatedTodo.updated === 1){
        todoToUpdate.updated = 1
    }

    res.send(todoToUpdate)
}

exports.delete = (req, res) => {
    const todoId = req.params.id;
    const todoIndex = todo.find((item) => item.id === todoId);

    if (todoIndex === -1) {
        return res.status(404).send('task not found');
      }

    todo.splice(todoIndex, 1)
    res.send('Task ${todoId} has been deleted')
}