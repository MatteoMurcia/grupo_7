const path = require("path");
const fs = require("fs");
const db = require('../database/models')


const productsDbPath = path.join(__dirname, "../db/products.json");

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

const controller = {
    detalle: function (req, res) {
        db.Product.findByPk(req.params.id)
        .then(product=>  res.render('../views/products/detalle', { product }))
/*         const productsList = readJsonFile(productsDbPath);
        const id = req.params.id;
        const product = productsList.find((i) => i.id == id);
        res.render('../views/products/detalle', { product }); */
    },
    listadoDeProductos: function (req, res) {
        db.Product.findAll()
        .then(productsList => res.render('../views/products/productsList', {productsList}) )
/*         const productsList = readJsonFile(productsDbPath);
        res.render('../views/products/productsList', { productsList }) */
    },
    listadoDeAlimentos: function (req, res) {
        db.Product.findAll({
            where: {
                category_product: "alimentos"
            }
        })
        .then(alimentos => res.render('../views/products/alimentos', { alimentos }))
    },
    listadoDeSnacks: function (req, res) {
        db.Product.findAll({
            where: {
                category_product: "snacks"
            }
        })
        .then(snacks => res.render('../views/products/snacks', { snacks }))
    },
    listadoDeAccesorios: function (req, res) {
        db.Product.findAll({
            where: {
                category_product: "accesorios"
            }
        })
        .then(accesorios => res.render('../views/products/accesorios', { accesorios }))
    },
    listadoDeJuguetes: function (req, res) {
        db.Product.findAll({
            where: {
                category_product: "juguetes"
            }
        })
        .then(juguetes => res.render('../views/products/juguetes', { juguetes }))
        
    },
    listadoDeHigiene: function (req, res) {
        db.Product.findAll({
            where: {
                category_product: "higiene"
            }
        })
        .then(higiene => res.render('../views/products/higiene', { higiene }))
    },
}

module.exports = controller;