const { db } = require("../config/db.js");
const bcrypt = require('bcrypt');

const TABLENAME = 'users'
const TABLEFIELDS = ['id','email','username','first_name', 'last_name']

const _register = (args) => {
    _insertUser({username: args.username})
    .then(
        result => {
            console.log(result)
        }
    )
    .catch(error => console.log(error))
    return db('hashpwd')
    .insert({
        username: args.username,
        password: bcrypt.hashSync(args.password, 10)
    })
    .returning('id','username','password')
}

const _login = (username) => {
    return db('hashpwd')
    .select('username','password')
    .where({username: username})
}

const _getAllUsers = () => {
    return db(TABLENAME).select(TABLEFIELDS).orderBy("id");
};

const _getOneUser = (id) => {
    return db(TABLENAME).select(TABLEFIELDS).where({ id });
};

const _insertUser = (args) => {
    return db(TABLENAME).insert(args).returning(TABLEFIELDS);
};

const _updateUser = (args) => {
    const { id, ...updates} = args
    return db(TABLENAME)
    .where({id})
    .update(updates)
    .returning(TABLEFIELDS)
}

const _deleteUser = (id) => {
    return db(TABLENAME)
    .where({id})
    .delete()
}

module.exports = {
    _register,
    _login,
    _getAllUsers,
    _getOneUser,
    _insertUser,
    _updateUser,
    _deleteUser
};
