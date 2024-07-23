const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");

module.exports = {
    loginUser: async (req, res) => {
        const { username, password } = req.body;

        try {
            const user = await userModel.getUserByUsername(username);

            if (!user) {
                return res.status(404).json({ message: "user not found" });
            }

            const passwordMatch = await bcrypt.compare(
                password + "",
                user.password
            );

            if (!passwordMatch) {
                return res
                    .status(401)
                    .json({ message: "Authentication failed..." });
            }

            res.status(200).json({
                message: "Login succesfull",
                status: 200,
                user: { userid: user.id, username: user.username },
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "internal server error" });
        }
    },
    registerUser: async (req, res) => {
        const { username, password, email, first_name, last_name } = req.body;

        const user = { username, password, email, first_name, last_name };

        try {
            const userInfo = await userModel.createUser(user);
            res.status(201).json({
                message: "User registered successfullty",
                user: userInfo,
            });
        } catch (error) {
            console.log(error);
            if (error.code == 23505) {
                return res.status(200).json({
                    message: error.message,
                });
            }
            res.status(500).json({
                error: "Internal server error",
            });
        }
    },
};
