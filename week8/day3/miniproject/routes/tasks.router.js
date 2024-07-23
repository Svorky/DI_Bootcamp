const { insertTask } = require("../conrollers/tasks.controller.js");
const {
    getAllTasks,
    getOneTask,
    updateTask,
    deleteTask,
} = require("../conrollers/tasks.controller.js");
const express = require("express");

const router = express.Router();

router.get('/', getAllTasks)
router.get('/:id', getOneTask);
router.post('/', insertTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = {
    router,
};
