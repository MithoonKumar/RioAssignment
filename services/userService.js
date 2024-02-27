const User = require('../models/User');
const jwt = require("jsonwebtoken");

const users = {};

exports.createUser = (username, passcode) => {
    console.log("users");
    console.log(users);
    if (users[username]) {
        return { status: 'failure', message: 'User already exists' };
    }
    users[username] = new User(username, passcode);
    return { status: 'success', message: 'User created successfully' };
};

exports.getAllUsers = () => {
    return { status: 'success', data: Object.keys(users) };
};

exports.login = (username, passcode) => {
    console.log("users");
    console.log(users);
    const user = users[username];
    if (!user || user.passcode !== passcode) {
        return { status: 'failure', message: 'Invalid username or password' };
    }
    // Generate JWT token
    const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
    return { status: 'success', token };
};

exports.logout = (username) => {
    // Nothing to do for logout in memory storage
    return { status: 'success', message: 'Logged out successfully' };
};