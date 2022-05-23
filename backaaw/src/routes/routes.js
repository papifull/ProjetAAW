const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers');
router.post('/signup', usersController.postSignup);
router.get('/', usersController.getUser);
module.exports = router;