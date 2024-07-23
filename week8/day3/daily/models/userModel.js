const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

module.exports = {
    getUserByUsername: async (username) => {
        try {
            let rawdata = fs.readFileSync(
                path.join(__dirname, "../config/db.json")
            );
            let users = JSON.parse(rawdata);
            let user = users.find((t) => t.username === username);
            console.log("user", user);
            return user;
        } catch (error) {
            throw error;
        }
    },
    createUser: async (userinfo) => {
        const { firstname, lastname, email, username, password } = userinfo;

        try {
            let rawdata = fs.readFileSync(
                path.join(__dirname, "../config/db.json")
            );
            let users = JSON.parse(rawdata);
            let checkUsername = users.find((u) => u.username === username);
            let checkEmail = users.find((u) => u.email === email);
            if (checkEmail) {
                throw {
                    code: 23505,
                    message: "email already exists",
                };
            }
            if (checkUsername) {
                throw {
                    code: 23505,
                    message: "username already exists",
                };
            }
            const hashPassword = await bcrypt.hash(password + "", 10);
            let lastid = fs.readFileSync(
                path.join(__dirname, "../config/userids.txt")
            );
            let newid = Number(lastid) + 1;
            let newUser = {
                id: newid,
                ...userinfo,
                password: hashPassword,
            };
            users.push(newUser);
            fs.writeFileSync(
                path.join(__dirname, "../config/db.json"),
                JSON.stringify(users, null, 4),
                "utf8"
            );
            fs.writeFileSync(
                path.join(__dirname, "../config/userids.txt"),
                newid.toString(),
                "utf-8"
            );
            return {
                id: newUser.id,
                username: newUser.username,
            };
        } catch (error) {
            throw error;
        }
    },
    getAllUsers: async () => {
        try {
            let rawdata = fs.readFileSync(
                path.join(__dirname, "../config/db.json")
            );
            let users = JSON.parse(rawdata);
            return users;
        } catch (error) {
            throw error;
        }
    },
    getUserById: async (id) => {
        try {
            let rawdata = fs.readFileSync(
                path.join(__dirname, "../config/db.json")
            );
            let users = JSON.parse(rawdata);
            let user = users.find((t) => t.id === id);
            return id;
        } catch (error) {
            throw error;
        }
    },
    updateUser: async (args) => {
        try {
            const { id, ...updates } = args;
            let rawdata = fs.readFileSync(
                path.join(__dirname, "../config/db.json")
            );
            let users = JSON.parse(rawdata);
            let index = users.findIndex((t) => t.id === id);
            let updatedUser = {
                ...users[index],
                ...updates,
            };
            users[index] = updatedUser;
            fs.writeFileSync(
                path.join(__dirname, "../config/db.json"),
                JSON.stringify(users),
                "utf8"
            );
            return updatedUser;
        } catch (error) {}
    },
};
