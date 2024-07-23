const {
    _register,
    _login,
    _getAllUsers,
    _getOneUser,
    _insertUser,
    _updateUser,
    _deleteUser,
} = require("../models/users.model.js");
const bcrypt = require('bcrypt');

const register = (req,res) => {
    _register(req.body)
    .then( result => {
        res.json("success")
    })
    .catch( error => res.json(error))
}

const login = (req, res) => {
    _login(req.body.username)
    .then (
        result => {
            let comp = bcrypt.compareSync(req.body.password, result[0].password)
            if(comp){
                res.json('login')
            } else {
                res.json('wrong password')
            }
        }
    )
}

const getAllUsers = (req, res) => {
    _getAllUsers()
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(404).json({ message: "something went wrong" });
        });
};

const getOneUser = (req, res) => {
    _getOneUser(Number(req.params.id))
        .then((result) => res.json(result))
        .catch((error) => {
            res.status(404).json({ message: error });
        });
};

const insertUser = (req, res) => {
    _insertUser(req.body)
        .then((result) => res.status(201).json(result))
        .catch((error) => res.json(error));
};

const updateUser = (req, res) => {
    _updateUser({id: Number(req.params.id), ...req.body})
        .then((result) => res.status(200).json(result))
        .catch((error) => res.json(error));
};

const deleteUser = (req, res) => {
    _deleteUser(Number(req.params.id))
        .then((result) => res.status(200).json(result))
        .catch((error) => res.json(error));
};

module.exports = {
    register,
    login,
    getAllUsers,
    getOneUser,
    insertUser,
    updateUser,
    deleteUser,
};
