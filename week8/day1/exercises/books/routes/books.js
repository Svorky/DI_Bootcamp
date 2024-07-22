// routes/books.js
const express = require('express')
const router = express.Router()

// Sample in-memory database for storing books
const books = [];

// Get all books
router.get('/', (req, res) => {
    res.status(200).json(books)
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const book = books.find(book => book.id === id)

    if (!book) {
        return res.status(404).send('book not found')
    }
    res.json(book)
})
// Add a new book
router.post('/', (req, res) => {

    const newBook = {
        id: books.length + 1,
        title: req.body.title
    }
    books.push(newBook)
    res.status(201).json(newBook)
})
// Update a book by ID
router.put('/:ID', (req,res) => {
    const id = Number(req.params.ID)
    const index = books.findIndex(book => book.id === id)
    const updatedBook = {
        ...books[index],
        ...req.body
    }

    books[index] = updatedBook
    res.status(200).json(books[index])
})
// Delete a book by ID
router.delete('/:ID', (req,res) => {
    const id = Number(req.params.ID)
    const index = books.findIndex(book => book.id === id)
    books.splice(index, 1)
    res.status(200).json('book deleted')
})

module.exports = router