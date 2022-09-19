const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');


router.get('/', controller.index);

router.get('/carrito', controller.carrito);

router.get('/category/:category', controller.listadoPorCategory);

module.exports = router;