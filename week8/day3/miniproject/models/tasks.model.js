const fs = require("fs");
const path = require("path");

const TABLEFIELDS = ["id", "title", "completed"];

const _getAllTasks = () => {
    return new Promise((resolve, reject) => {
        let rawdata = fs.readFileSync(
            path.join(__dirname, "../config/db.json")
        );
        let tasks = JSON.parse(rawdata);
        resolve(tasks);
    });
};

const _getOneTask = (id) => {
    return new Promise((resolve, reject) => {
        let rawdata = fs.readFileSync(
            path.join(__dirname, "../config/db.json")
        );
        let tasks = JSON.parse(rawdata);
        let task = tasks.find((t) => t.id === id);
        resolve(task);
    });
};

const _insertTask = (args) => {
    return new Promise((resolve, reject) => {
        let lastid = fs.readFileSync(
            path.join(__dirname, "../config/taskids.txt")
        );
        let rawdata = fs.readFileSync(
            path.join(__dirname, "../config/db.json")
        );
        let tasks = JSON.parse(rawdata);
        let newid = Number(lastid) + 1;
        let newTask = {
            id: newid,
            completed: false,
            ...args,
        };
        tasks.push(newTask)
        fs.writeFileSync(path.join(__dirname, "../config/db.json"), JSON.stringify(tasks), "utf8");
        fs.writeFileSync(path.join(__dirname, "../config/taskids.txt"), newid.toString(), 'utf-8')
        resolve(newTask);
    });
};

const _updateTask = (args) => {
    const { id, ...updates } = args;
    return new Promise((resolve, reject) => {
        let rawdata = fs.readFileSync(
            path.join(__dirname, "../config/db.json")
        );
        let tasks = JSON.parse(rawdata);
        let index = tasks.findIndex((t) => t.id === id);
        let updatedTask = {
            ...tasks[index],
            ...updates
        };
        tasks[index] = updatedTask
        fs.writeFileSync(path.join(__dirname, "../config/db.json"), JSON.stringify(tasks), "utf8");
        resolve(updatedTask);
    });
};

const _deleteTask = (id) => {
    return new Promise((resolve, reject) => {
        let rawdata = fs.readFileSync(
            path.join(__dirname, "../config/db.json")
        );
        let tasks = JSON.parse(rawdata);
        let index = tasks.findIndex((t) => t.id === id);
        tasks.splice(index, 1)
        fs.writeFileSync(path.join(__dirname, "../config/db.json"), JSON.stringify(tasks), "utf8");
        resolve(1);
    });
};

module.exports = {
    _getAllTasks,
    _getOneTask,
    _insertTask,
    _updateTask,
    _deleteTask,
};
