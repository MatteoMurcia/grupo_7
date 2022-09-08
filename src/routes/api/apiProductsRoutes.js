const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/apiProductsController');

router.get('/listado', controller.listado);


router.get('/detalle/:id', controller.detalle);


module.exports = router;

