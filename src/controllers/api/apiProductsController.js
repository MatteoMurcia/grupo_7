const db = require('../../database/models')


const controller = {
    'detalle': function (req, res) {
        db.Product.findByPk(req.params.id)
            .then(product => {
                return res.status(200).json({
                    meta: {
                        code: res.statusCode,
                        url: req.protocol + "://" + req.get('host') + req.originalUrl
                    },
                    data: { product }

                })
            });

    },
    'listado': function (req, res) {
        db.Product.findAll()
            .then(products => {
                return res.status(200).json({
                    meta: {
                        code: res.statusCode,
                        total: products.length,
                        url: req.protocol + "://" + req.get('host') + req.originalUrl
                    },
                    data: {
                        products

                    }
                })
            })

    }
}

module.exports = controller;