const express = require('express');
const routes = express.Router();
const controller = require('../controllers/mainController');


routes.get('/', controller.index);
routes.get('/login', controller.login);
routes.get('/carrito', controller.carrito);
routes.get('/detalle', controller.detalle);
routes.get('/register', controller.register);


module.exports = routes;