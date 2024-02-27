const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/user', userController.createUser);
router.get('/user', userController.getAllUsers);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;
