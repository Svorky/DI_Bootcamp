const {
    _getAllTasks,
    _getOneTask,
    _insertTask,
    _updateTask,
    _deleteTask,
} = require("../models/tasks.model.js");

const getAllTasks = (req, res) => {
    _getAllTasks()
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.error(error)
            res.status(404).json({ message: "something went wrong" });
        });
};

const getOneTask = (req, res) => {
    _getOneTask(Number(req.params.id))
        .then((result) => res.json(result))
        .catch((error) => {
            res.status(404).json({ message: error });
        });
};

const insertTask = (req, res) => {
    _insertTask(req.body)
        .then((result) => res.status(201).json(result))
        .catch((error) => res.json(error));
};

const updateTask = (req, res) => {
    _updateTask({id: Number(req.params.id), ...req.body})
        .then((result) => res.status(200).json(result))
        .catch((error) => res.json(error));
};

const deleteTask = (req, res) => {
    _deleteTask(Number(req.params.id))
        .then((result) => res.status(200).json(result))
        .catch((error) => res.json(error));
};

module.exports = {
    getAllTasks,
    getOneTask,
    insertTask,
    updateTask,
    deleteTask,
};
