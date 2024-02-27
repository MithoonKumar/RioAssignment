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