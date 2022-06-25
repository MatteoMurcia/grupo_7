const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');

router.get('/', controller.listadoDeProductos);

router.get('/alimentos', controller.listadoDeAlimentos);

router.get('/snacks', controller.listadoDeSnacks);

router.get('/accesorios', controller.listadoDeAccesorios);

router.get('/juguetes', controller.listadoDeJuguetes);

router.get('/higiene', controller.listadoDeHigiene);



router.get('/:id', controller.detalle);


module.exports = router;

