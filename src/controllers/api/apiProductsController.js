const { sequelize } = require('../../database/models');
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


        // model.findAll({
        //     attributes: [
        //       'category',
        //       [Sequelize.literal('COUNT(DISTINCT(product))'), 'countOfProducts']
        //     ],
        //     group: 'category'
        //   })


        //attributes: ['product_id', 'product_name', 'desc_product', 'category_product', [sequelize.fn('COUNT', 'category_product'), 'countOfProducts'], ['product_id', req.protocol + "://" + req.get('host') + "/detalle/" + 'product_id']],
        //group: ['category_product']

    },
    'categorias': function (req, res) {
        const page = Number(req.query.page) || 0
        const size = 10
        db.Product.findAll({

            attributes: [
                'category_product',
                [sequelize.literal('COUNT(DISTINCT(product_id))'), 'countOfProducts']
            ],
            group: 'category_product'
        })

            //attributes: ['product_id', 'product_name', 'desc_product', 'category_product', [sequelize.fn('CONCAT', `${req.protocol}://${req.get('host')}/api/products/detalle/`, sequelize.col("product_id")), "detalle"]],
            //order: [['category_product', 'ASC']],
            //limit: size,
            //offset: (page * size)

            // })
            .then(products => {
                return res.status(200).json({
                    meta: {
                        code: res.statusCode,
                        Pagina: page,
                        Registros: 10,
                        url: req.protocol + "://" + req.get('host') + req.originalUrl

                    },
                    data: { products }

                })
            })

    },
    'listado': function (req, res) {
        const page = Number(req.query.page) || 0
        const size = 10
        db.Product.findAndCountAll({

            attributes: ['product_id', 'product_name', 'desc_product', 'category_product', [sequelize.fn('CONCAT', `${req.protocol}://${req.get('host')}/api/products/detalle/`, sequelize.col("product_id")), "detalle"],],
            order: [['category_product', 'ASC']],
            limit: size,
            offset: (page * size)

        })
            .then(products => {
                return res.status(200).json({
                    meta: {
                        code: res.statusCode,
                        Pagina: page,
                        Registros: 10,
                        url: req.protocol + "://" + req.get('host') + req.originalUrl

                    },
                    data: { products }

                })
            })

    }

}

module.exports = controller;