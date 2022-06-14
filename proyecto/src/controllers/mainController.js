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
        const productosDestacados = productsList.filter(function(product){
            return product.type == "destacado";
        })
        res.render('index', {productosDestacados})
    },
    login:  function (req, res){
        res.render('../views/users/login')
    },
    register:  function (req, res){
        res.render('../views/users/register')
    }
};

module.exports = controller;
