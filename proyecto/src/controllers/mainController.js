const path = require("path");
const fs = require("fs");


const productsDbPath = path.join(__dirname, "../db/products.json");

const readJsonFile = ( path ) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

const controller ={
    index: function (req, res){
        const productsList = readJsonFile(productsDbPath);
        const productosDestacados = productsList.filter(function(producto){
            return producto.destacado == true;
        })
        res.render('index', {productosDestacados: productosDestacados})
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
    },
    listadoDeProductos: function (req, res){
        const productsList = readJsonFile(productsDbPath);
        res.render('../views/products/productsList', {productsList})
    }
};

module.exports = controller;
