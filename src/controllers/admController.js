const path = require("path");
const fs = require("fs");
const { send } = require("process");
const { stringify } = require("querystring");
const db = require('../database/models')

const DbPath = path.join(__dirname, "../db/products.json");

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}


const controller = {
    crearProducto: (req, res) => { res.render('../views/adm/productNew') },
    editProducto: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(product=>  res.render('../views/adm/productEdit', { product }))
/*      const products = readJsonFile(DbPath)
        const product = products.find(product => product.id == req.params.id) 
        res.render('../views/adm/productEdit', { product });*/
    },
    updateProducto: (req, res) => {
        db.Product.update(
            {
                product_name: req.body.nameProduct,
                price: req.body.priceProduct,
                desc_product: req.body.descriptionProduct,
                type: req.body.typeProduct,
                images: req.file?.filename,
                category_product: req.body.categoryProduct,
                brand: req.body.brandProduct
            },{
                where: {product_id: req.params.id}
            }
        )
        .then(()=> res.redirect("/products"))
       /*  const products = readJsonFile(DbPath)
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
        return res.redirect("/"); */
    },
    storeProducto: (req, res) => {
        db.Product.create({
            product_name: req.body.nameProduct,
            price: req.body.priceProduct,
            desc_product: req.body.descriptionProduct,
            type: req.body.typeProduct,
            images: req.file?.filename || "default-image.png",
            category_product: req.body.categoryProduct,
            brand: req.body.brandProduct
        })
        .then(function(){
            return res.redirect("/products")
        })
/*         let archivoProductos = readJsonFile(DbPath);
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

        res.redirect('/') */
    },
    deleteProducto: (req, res)=>{
        res.render("../views/adm/productDelete", {id:req.params.id})
    },
    destroyProducto: (req,res)=>{
        db.Product.destroy({
            where: {
                product_id: req.params.id
            }
        })
        .then(()=>res.redirect("/products"))
    }
}





module.exports = controller;