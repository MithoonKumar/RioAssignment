const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/user/:username/message', authMiddleware.verifyToken, messageController.sendMessage);
router.get('/user/:username/message',  messageController.getChatHistory);

module.exports = router;