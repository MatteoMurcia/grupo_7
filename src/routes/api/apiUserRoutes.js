const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/api/apiUsersController');




router.get('/listado', apiUsersController.listUser)

router.get('/detalle/:id', apiUsersController.userView)
module.exports = router;