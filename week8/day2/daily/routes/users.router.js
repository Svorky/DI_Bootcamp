const {
    register,
    login,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
} = require("../conrollers/users.controller.js");
const express = require("express");

const router = express.Router();

const url = '/users'

router.post('/register', register);
router.post('/login', login);
router.get(`${url}`, getAllUsers)
router.get(`${url}/:id`, getOneUser);
router.put(`${url}/:id`, updateUser)
router.delete(`${url}/:id`, deleteUser)

module.exports = {
    router,
};
