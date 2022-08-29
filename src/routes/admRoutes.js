const express = require('express');
const router = express.Router();
const multer = require('multer');
const controller = require('../controllers/admController');
const path = require('path');
const { appendFile } = require('fs');

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
router.post('/new', upload.single('imageProduct'), controller.storeProducto);

router.get('/:id/edit', controller.editProducto);
router.put('/:id', upload.single('imageProduct'), controller.updateProducto);

router.get('/delete/:id', controller.deleteProducto);
router.delete('/destroy/:id', controller.destroyProducto);



module.exports = router;

