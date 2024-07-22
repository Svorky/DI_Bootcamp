const {
    getAllBooks,
    getOneBook,
    insertBook,
    updateBook,
    deleteBook,
} = require("../conrollers/books.controller.js");
const express = require("express");

const router = express.Router();

const url = '/api/books'

router.get(`${url}`, getAllBooks);
router.get(`${url}/:id`, getOneBook);
router.post(`${url}`, insertBook);
router.put(`${url}/:id`, updateBook)
router.delete(`${url}/:id`, deleteBook)

module.exports = {
    router,
};
