const {
    _getAllPosts,
    _getOnePost,
    _insertPost,
    _updatePost,
    _deletePost,
} = require("../models/posts.model.js");

const getAllPosts = (req, res) => {
    _getAllPosts()
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(404).json({ message: "something went wrong" });
        });
};

const getOnePost = (req, res) => {
    _getOnePost(req.params.id)
        .then((result) => res.json(result))
        .catch((error) => {
            res.status(404).json({ message: error });
        });
};

const insertPost = (req, res) => {
    const { title, content } = req.body;
    _insertPost(title, content)
        .then((result) => res.status(201).json(result))
        .catch((error) => res.json(error));
};

const updatePost = (req, res) => {
    _updatePost({id: Number(req.params.id), ...req.body})
        .then((result) => res.status(200).json(result))
        .catch((error) => res.json(error));
};

const deletePost = (req, res) => {
    _deletePost(Number(req.params.id))
        .then((result) => res.status(200).json(result))
        .catch((error) => res.json(error));
};

module.exports = {
    getAllPosts,
    getOnePost,
    insertPost,
    updatePost,
    deletePost,
};
