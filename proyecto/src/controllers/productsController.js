const path = require("path");
const fs = require("fs");


const productsDbPath = path.join(__dirname, "../db/products.json");

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

const controller = {
    detalle: function (req, res) {
        const productsList = readJsonFile(productsDbPath);
        const id = req.params.id;
        const product = productsList.find((i) => i.id == id);
        res.render('../views/products/detalle', { product });
    },
    listadoDeProductos: function (req, res) {
        const productsList = readJsonFile(productsDbPath);
        res.render('../views/products/productsList', { productsList })
    },
    listadoDeAlimentos: function (req, res) {
        const productsList = readJsonFile(productsDbPath);
        const alimentos = productsList.filter(function (product) {
            return product.category == "alimentos";
        })
        res.render('../views/products/alimentos', { alimentos });
    },
    listadoDeSnacks: function (req, res) {
        const productsList = readJsonFile(productsDbPath);
        const snacks = productsList.filter(function (product) {
            return product.category == "snacks";
        })
        res.render('../views/products/snacks', { snacks });
    },
    listadoDeAccesorios: function (req, res) {
        const productsList = readJsonFile(productsDbPath);
        const accesorios = productsList.filter(function (product) {
            return product.category == "accesorios";
        })
        res.render('../views/products/accesorios', { accesorios });
    },
    listadoDeJuguetes: function (req, res) {
        const productsList = readJsonFile(productsDbPath);
        const juguetes = productsList.filter(function (product) {
            return product.category == "juguetes";
        })
        res.render('../views/products/juguetes', { juguetes });
    },
    listadoDeHigiene: function (req, res) {
        const productsList = readJsonFile(productsDbPath);
        const higiene = productsList.filter(function (product) {
            return product.category == "higiene";
        })
        res.render('../views/products/higiene', { higiene });
    },

};

module.exports = controller;