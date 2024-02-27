const userService = require('../services/userService');

exports.createUser = (req, res) => {
    const { username, passcode } = req.body;
    const result = userService.createUser(username, passcode);
    res.json(result);
};

exports.getAllUsers = (req, res) => {
    const result = userService.getAllUsers();
    res.json(result);
};

exports.login = (req, res) => {
    const { username, passcode } = req.body;
    const result = userService.login(username, passcode);
    res.json(result);
};

exports.logout = (req, res) => {
    const { username } = req.body;
    const result = userService.logout(username);
    res.json(result);
};