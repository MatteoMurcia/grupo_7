const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const multer = require('multer');
const path = require('path')


const { body } = require('express-validator');


const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware');
const validationLogin = require('../middlewares/validationLogin');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/userImages'));

    },
    filename: (req, file, cb) => {
        const newFileName = 'p-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }

});

const upload = multer({ storage });

router.get('/register', guestMiddleware, usersController.registerView);
router.post('/register', upload.single("avatar"), usersController.register)

router.get('/login', guestMiddleware, usersController.login);

router.post('/login', guestMiddleware, usersController.loginProcess);
router.get('/userView', authMiddleware, usersController.profile)

router.get('/logout', usersController.logout)


module.exports = router;