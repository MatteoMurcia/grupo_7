const express = require('express');
const router = express.Router();
const multer = require('multer');
const controller = require('../controllers/admController');
const path = require('path');
const {body} = require('express-validator');

let validationsProducts =[
    body('nameProduct').notEmpty().isLength({min:5}).withMessage('Tienes que escribir un nombre'),
    body('descriptionProduct').notEmpty().isLength({min:20}).withMessage('Tienes que escribir una descripción'),
    body('imageProduct').custom((value, { req }) => {
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
	}),
    body('brandProduct').notEmpty().withMessage('El producto debe tener marca'),
    body('priceProduct').notEmpty().withMessage('El producto debe tener precio')
]

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images'));

    },
    filename: (req, file, cb) => {
        const newFileName = 'p-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }

});
const upload = multer({ storage });


router.get('/new', controller.crearProducto);
router.post('/new', upload.single('imageProduct'), validationsProducts, controller.storeProducto);

router.get('/:id/edit', controller.editProducto);
router.put('/:id', upload.single('imageProduct'), validationsProducts, controller.updateProducto);

router.get('/delete/:id', controller.deleteProducto);
router.delete('/destroy/:id', controller.destroyProducto);



module.exports = router;

