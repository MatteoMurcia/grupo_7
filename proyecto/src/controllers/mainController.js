const path = require("path");


const controller ={
    index: function (req, res){
        res.sendFile(path.join(__dirname, '../views/index.html'))
    },
    login:  function (req, res){
        res.sendFile(path.join(__dirname, '../views/login.html'))
    },
    carrito:  function (req, res){
        res.sendFile(path.join(__dirname, '../views/carrito.html'))
    },
    detalle:  function (req, res){
        res.sendFile(path.join(__dirname, '../views/detalle.html'))
    },
    register:  function (req, res){
        res.sendFile(path.join(__dirname, '../views/register.html'))
    }
};

module.exports = controller;
