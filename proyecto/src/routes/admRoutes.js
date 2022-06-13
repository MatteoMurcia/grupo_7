const express = require('express');
const router = express.Router();
const controller = require('../controllers/admController');

router.get('/new', controller.crearProducto);


module.exports = router;

