const {
    getAllPosts,
    getOnePost,
    insertPost,
    updatePost,
    deletePost,
} = require("../conrollers/posts.controller.js");
const express = require("express");

const router = express.Router();

router.get("/api/posts", getAllPosts);
router.get("/api/posts/:id", getOnePost);
router.post("/api/posts", insertPost);
router.put('/api/posts/:id', updatePost)
router.delete('/api/posts/:id', deletePost)

module.exports = {
    router,
};
