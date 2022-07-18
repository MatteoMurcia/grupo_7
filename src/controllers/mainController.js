const path = require("path");
const fs = require("fs");


const productsDbPath = path.join(__dirname, "../db/products.json");

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

const controller = {
    index: function (req, res) {
        const productsList = readJsonFile(productsDbPath);
        const productosDestacados = productsList.filter(function (product) {
            return product.type == "destacado";
        })
        res.render('index', { productosDestacados })
    },
    carrito: function (req, res) {
        const productsList = readJsonFile(productsDbPath);
        const carrito = productsList.filter(function (product) {
            return product.brand == "Eukanuba";
        })
        res.render('../views/products/carrito', { carrito });
    }
};

module.exports = controller;
