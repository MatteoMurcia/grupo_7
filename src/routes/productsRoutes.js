const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');

router.get('/', controller.listadoDeProductos);
router.get('/:id', controller.detalle);


module.exports = router;

