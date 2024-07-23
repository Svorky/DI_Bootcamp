const express = require("express");
const path = require("path");

const authrouter = express.Router();

authrouter.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

authrouter.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

authrouter.get('/registration', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/registration.html"));
})

module.exports = {
    authrouter,
};
