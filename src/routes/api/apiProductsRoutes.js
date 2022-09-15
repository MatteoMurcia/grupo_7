const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/apiProductsController');

router.get('/listado', controller.listado);


router.get('/detalle/:id', controller.detalle);

router.get('/categorias', controller.categorias);

module.exports = router;

