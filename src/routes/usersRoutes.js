const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const usersControllerDb = require('../controllers/usersControllerDb');
const multer = require('multer');
const path = require('path')


const { body } = require('express-validator');

const validationsUser = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastname').notEmpty().withMessage('Tienes que escribir un apellido'),
	body('email')
	.notEmpty().withMessage('Tienes que escribir un e-mail').bail()
	.isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('username').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
	body('password').notEmpty().withMessage('Tienes que escribir una contrasena'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if(!file){
			throw new Error ('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if(!acceptedExtensions.includes(fileExtension)){
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
			}
		}
		
		return true
	})
]

const guestMiddleware = require('../middlewares/guestMiddleware');
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
//router.post('/register', upload.single("avatar"), usersController.register)
router.post('/register', upload.single("avatar"), validationsUser, usersControllerDb.register)

router.get('/login', guestMiddleware, usersControllerDb.login);

router.post('/login', guestMiddleware, usersControllerDb.loginProcess);
router.get('/userView', authMiddleware, usersController.profile)
router.get('/userView/:id', authMiddleware, usersControllerDb.userView)

router.get('/logout', usersController.logout)
router.get('/list', usersControllerDb.listUser)

router.get('/update/:id', usersControllerDb.update)
router.post('/update/:id', upload.single("avatar"), validationsUser, usersControllerDb.update_save)

router.get('/remove/:id', usersControllerDb.borrar)


module.exports = router;