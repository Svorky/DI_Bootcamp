const { db } = require("../config/db.js");

const TABLENAME = 'posts'
const _getAllPosts = () => {
    return db(TABLENAME).select("id", "title", "content").orderBy("id");
};

const _getOnePost = (id) => {
    return db(TABLENAME).select("id", "title", "content").where({ id: id });
};

const _insertPost = (title, content) => {
    return db(TABLENAME).insert({ title, content }, ["id", "title", "content"]);
};

const _updatePost = (args) => {
    const { id, ...updates} = args
    return db(TABLENAME)
    .where({id})
    .update(updates)
    .returning(['id','title','content'])
}

const _deletePost = (id) => {
    return db(TABLENAME)
    .where({id})
    .delete()
}

module.exports = {
    _getAllPosts,
    _getOnePost,
    _insertPost,
    _updatePost,
    _deletePost
};
