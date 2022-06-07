const path = require("path");


const controller ={
    index: function (req, res){
        res.render('index')
    },
    login:  function (req, res){
        res.render('../views/users/login.ejs')
    },
    carrito:  function (req, res){
        res.sendFile(path.join(__dirname, '../views/carrito.html'))
    },
    detalle:  function (req, res){
        res.sendFile(path.join(__dirname, '../views/detalle.html'))
    },
    register:  function (req, res){
        res.render('../views/users/register.ejs')
    }
};

module.exports = controller;
