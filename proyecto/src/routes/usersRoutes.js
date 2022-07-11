const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

const { body } = require('express-validator');


const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', guestMiddleware, usersController.loginProcess);

router.get('/userView', authMiddleware, usersController.profile)

router.get('/logout', usersController.logout)


module.exports = router;