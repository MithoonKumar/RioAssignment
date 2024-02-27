const messageService = require('../services/messageService');
const url = require('url');

exports.sendMessage = (req, res) => {
    const { from, to, text } = req.body;
    const result = messageService.sendMessage(from, to, text);
    res.json(result);
};

exports.getChatHistory = (req, res) => {
    const parsedUrl = url.parse(req.url);

    // Get the pathname from the parsed URL
    const pathname = parsedUrl.pathname;

    // Split the pathname by '/'
    const parts = pathname.split('/');

    // The username should be the second element in the parts array
    const username = parts[2];

    const { friend } = req.query;
    const result = messageService.getChatHistory(username, friend);
    res.json(result);
};