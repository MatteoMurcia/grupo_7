const path = require("path");
const fs = require("fs");
const { send } = require("process");
const { stringify } = require("querystring");

const DbPath = path.join(__dirname, "../db/products.json");

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}


const controller = {
    crearProducto: (req, res) => { res.render('../views/adm/productNew') },


    editProducto: (req, res) => {
        const products = readJsonFile(DbPath)
        const product = products.find(product => product.id == req.params.id)
        res.render('../views/adm/productEdit', { product });
    },


    updateProducto: (req, res) => {

        const products = readJsonFile(DbPath)
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == req.params.id) {
                products[i] = {
                    ...products[i],
                    name: req.body.nameProduct,
                    price: req.body.priceProduct,
                    // image: req.file?.filename || process[i].image,
                    description: req.body.descriptionProduct,
                    type: req.body.typeProduct,
                    category: req.body.categoryProduct,
                    id: products[i].id,
                    brand: req.body.brandProduct

                }
            }
        };
        fs.writeFileSync(DbPath, JSON.stringify(products, null, 2));
        return res.redirect("/");
    },



    storeProducto: (req, res) => {

        let archivoProductos = readJsonFile(DbPath);
        let idProducto;


        for (let i = 0; i < archivoProductos.length; i++) {
            idProducto = archivoProductos[i].id
        }

        let producto = {
            name: req.body.nameProduct,
            price: req.body.priceProduct,
            description: req.body.descriptionProduct,
            type: req.body.typeProduct,
            image: req.file?.filename || "default-image.png",
            category: req.body.categoryProduct,
            id: idProducto + 1,
            brand: req.body.brandProduct
        }



        archivoProductos.push(producto)
        productsJSON = JSON.stringify(archivoProductos);
        fs.writeFileSync(DbPath, productsJSON);

        res.redirect('/')

    }
}





module.exports = controller;