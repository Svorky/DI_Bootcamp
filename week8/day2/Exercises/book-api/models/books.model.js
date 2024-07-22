const { db } = require("../config/db.js");

const TABLENAME = 'books'
const TABLEFIELDS = ['id','title','author','publishedYear']

const _getAllBooks = () => {
    return db(TABLENAME).select(TABLEFIELDS).orderBy("id");
};

const _getOneBook = (id) => {
    return db(TABLENAME).select(TABLEFIELDS).where({ id });
};

const _insertBook = (args) => {
    return db(TABLENAME).insert(args, TABLEFIELDS);
};

const _updateBook = (args) => {
    const { id, ...updates} = args
    return db(TABLENAME)
    .where({id})
    .update(updates)
    .returning(TABLEFIELDS)
}

const _deleteBook = (id) => {
    return db(TABLENAME)
    .where({id})
    .delete()
}

module.exports = {
    _getAllBooks,
    _getOneBook,
    _insertBook,
    _updateBook,
    _deleteBook
};
