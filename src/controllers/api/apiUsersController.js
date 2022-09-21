const { sequelize } = require('../../database/models');
const db = require('../../database/models');

const controller = {
    'userView': function (req, res) {
        db.User.findByPk(req.params.id, {
            attributes: ['user_id', 'user_name', 'first_name', 'last_name', 'email', [sequelize.fn('CONCAT', `images/userimages/`, sequelize.col("images")), "imagen"]],
            //     attributes: ['user_id', 'user_name', 'first_name', 'last_name', 'email', [sequelize.fn('CONCAT', `${path.join(__dirname},/public/images/userimages/`, sequelize.col("images")), "imagen"]],
        })
            .then(user => {
                return res.status(200).json({
                    meta: {
                        code: res.statusCode,
                        url: req.protocol + "://" + req.get('host') + req.originalUrl
                    },
                    data: { user }

                })
            })
    },
    'listUser': function (req, res) {
        const page = Number(req.query.page) || 0
        const size = Number(req.query.size) || 10
        db.User.findAndCountAll({

            attributes: ['user_id', 'user_name', 'first_name', 'last_name', 'email', [sequelize.fn('CONCAT', `images/userimages/`, sequelize.col("images")), "imagen"], [sequelize.fn('CONCAT', `${req.protocol}://${req.get('host')}/api/users/detalle/`, sequelize.col("user_id")), "detalle"]],
            limit: size,
            offset: (page * size)
        })
            .then(usuarios => {


                return res.status(200).json({
                    meta: {
                        code: res.statusCode,
                        url: req.protocol + "://" + req.get('host') + req.originalUrl
                    },
                    data: {
                        usuarios

                    }
                })
            })
            .catch(err => {
                return res.status(404).send({ message: err });
            });

    }
}
module.exports = controller
