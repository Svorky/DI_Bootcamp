const {
    _getAllBooks,
    _getOneBook,
    _insertBook,
    _updateBook,
    _deleteBook,
} = require("../models/books.model.js");

const getAllBooks = (req, res) => {
    _getAllBooks()
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(404).json({ message: "something went wrong" });
        });
};

const getOneBook = (req, res) => {
    _getOneBook(req.params.id)
        .then((result) => res.json(result))
        .catch((error) => {
            res.status(404).json({ message: error });
        });
};

const insertBook = (req, res) => {
    _insertBook(req.body)
        .then((result) => res.status(201).json(result))
        .catch((error) => res.json(error));
};

const updateBook = (req, res) => {
    _updateBook({id: Number(req.params.id), ...req.body})
        .then((result) => res.status(200).json(result))
        .catch((error) => res.json(error));
};

const deleteBook = (req, res) => {
    _deleteBook(Number(req.params.id))
        .then((result) => res.status(200).json(result))
        .catch((error) => res.json(error));
};

module.exports = {
    getAllBooks,
    getOneBook,
    insertBook,
    updateBook,
    deleteBook,
};
