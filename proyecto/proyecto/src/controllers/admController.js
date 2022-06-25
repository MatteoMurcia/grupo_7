const path = require("path");
const fs = require("fs");



const controller = {
    crearProducto:  function (req, res){
        res.render('../views/adm/productNew')
    }
}

module.exports = controller;