const express = require('express')
const router = express.Router()

// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items
router.get('/', (req, res) => {
    res.status(200).json(todos)
})

router.get('/:todoID', (req, res) => {
    const id = Number(req.params.todoID)
    const todo = todos.find(todo => todo.id === id)

    if (!todo) {
        return res.status(404).send('todo not found')
    }
    res.json(todo)
})
// Add a new to-do item
router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        complete: req.body.complete ?? false
    }
    todos.push(newTodo)
    res.status(201).json(newTodo)
})
// Update a to-do item by ID
router.put('/:todoID', (req,res) => {
    const id = Number(req.params.todoID)
    const index = todos.findIndex(todo => todo.id === id)
    const updatedTodo = {
        ...todos[index],
        ...req.body
    }

    todos[index] = updatedTodo
    res.status(200).json(todos[index])
})
// Delete a to-do item by ID
router.delete('/:todoID', (req,res) => {
    const id = Number(req.params.todoID)
    const index = todos.findIndex(todo => todo.id === id)
    todos.splice(index, 1)
    res.status(200).json('Task deleted')
})

module.exports = router