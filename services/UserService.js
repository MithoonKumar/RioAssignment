const User = require('../models/User');

let users = {};

exports.createUser = (username, passcode) => {
    if (users[username]) {
        return { status: 'failure', message: 'User already exists' };
    }
    users[username] = new User(username, passcode);
    return { status: 'success', message: 'User created successfully' };
};

exports.getAllUsers = () => {
    return { status: 'success', data: Object.keys(users) };
};