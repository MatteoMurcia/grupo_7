module.exports = (sequelize, dataTypes) => {
    let alias = 'Order'; // esto debería estar en singular
    let cols = {
        order_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false,
        },
        product_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false,
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        order_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        quantity: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },

        price: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },

    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Order = sequelize.define(alias, cols, config);

    Order.associate = function (models) {
        Order.belongsTo(models.User, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "users",
            foreignKey: "user_id"
        })

        Order.belongsToMany(models.Product, {
            as: "products",
            otherKey: "order_id",
            through: "order_products",
            foreignKey: "product_id"
        })
    }
    return Order
}
